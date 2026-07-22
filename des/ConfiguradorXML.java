package des;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import java.io.File;
import java.lang.reflect.Method;

public class ConfiguradorXML {

    private EstadoDelSistema modelo;
    private ContadoresEstadisticos contadores;
    private GeneradorDeReportes reporte;
    private LibreriaDeRutinas libreria;
    private Evento eventoInicial;
    private String tipoFin;
    private double valorFin;
    private String metodoContadorFin;

    public void cargarConfiguracion(String rutaXML) throws Exception {

        // Lee el archivo xml
        File xmlFile = new File(rutaXML);
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(xmlFile);
        doc.getDocumentElement().normalize();

        // Extrae el texto del XML
        String modeloClassName = doc.getElementsByTagName("modelo").item(0).getTextContent();
        String contadoresClassName = doc.getElementsByTagName("contadores").item(0).getTextContent();
        String reporteClassName = doc.getElementsByTagName("reporte").item(0).getTextContent();
        String libreriaClassName = doc.getElementsByTagName("libreria").item(0).getTextContent();

        // Crea los objetos
        this.modelo = (EstadoDelSistema) Class.forName(modeloClassName).getDeclaredConstructor().newInstance();
        this.contadores = (ContadoresEstadisticos) Class.forName(contadoresClassName).getDeclaredConstructor()
                .newInstance();
        this.reporte = (GeneradorDeReportes) Class.forName(reporteClassName).getDeclaredConstructor().newInstance();
        this.libreria = (LibreriaDeRutinas) Class.forName(libreriaClassName).getDeclaredConstructor().newInstance();

        //Con
        Element eventoInicialElement = (Element) doc.getElementsByTagName("eventoInicial").item(0);
        String eventoClassName = eventoInicialElement.getElementsByTagName("clase").item(0).getTextContent();
        String metodoTiempoName = eventoInicialElement.getElementsByTagName("metodoTiempo").item(0).getTextContent();

        // Obtener el tiempo ejecutando el método en la librería mediante reflexión
        Method metodoTiempo = this.libreria.getClass().getMethod(metodoTiempoName);
        Object tiempoObj = metodoTiempo.invoke(this.libreria);

        // Castear a double (independientemente si retorna int o double)
        double tiempo = ((Number) tiempoObj).doubleValue();

        this.eventoInicial = (Evento) Class.forName(eventoClassName).getDeclaredConstructor(double.class)
                .newInstance(tiempo);

        // Configuración de condición de fin
        Element condicionFinElement = (Element) doc.getElementsByTagName("condicionFin").item(0);
        if (condicionFinElement != null) {
            this.tipoFin = condicionFinElement.getElementsByTagName("tipo").item(0).getTextContent();
            this.valorFin = Double.parseDouble(condicionFinElement.getElementsByTagName("valor").item(0).getTextContent());
            if (condicionFinElement.getElementsByTagName("metodoContador").getLength() > 0) {
                this.metodoContadorFin = condicionFinElement.getElementsByTagName("metodoContador").item(0).getTextContent();
            }
        }
    }

    public EstadoDelSistema getModelo() {
        return modelo;
    }

    public ContadoresEstadisticos getContadores() {
        return contadores;
    }

    public GeneradorDeReportes getReporte() {
        return reporte;
    }

    public LibreriaDeRutinas getLibreria() {
        return libreria;
    }

    public Evento getEventoInicial() {
        return eventoInicial;
    }

    public String getTipoFin() {
        return tipoFin;
    }

    public double getValorFin() {
        return valorFin;
    }

    public String getMetodoContadorFin() {
        return metodoContadorFin;
    }
}
