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

    public void cargarConfiguracion(String rutaXML) throws Exception {
        File xmlFile = new File(rutaXML);
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(xmlFile);
        doc.getDocumentElement().normalize();

        String modeloClassName = doc.getElementsByTagName("modelo").item(0).getTextContent();
        String contadoresClassName = doc.getElementsByTagName("contadores").item(0).getTextContent();
        String reporteClassName = doc.getElementsByTagName("reporte").item(0).getTextContent();
        String libreriaClassName = doc.getElementsByTagName("libreria").item(0).getTextContent();

        this.modelo = (EstadoDelSistema) Class.forName(modeloClassName).getDeclaredConstructor().newInstance();
        this.contadores = (ContadoresEstadisticos) Class.forName(contadoresClassName).getDeclaredConstructor().newInstance();
        this.reporte = (GeneradorDeReportes) Class.forName(reporteClassName).getDeclaredConstructor().newInstance();
        this.libreria = (LibreriaDeRutinas) Class.forName(libreriaClassName).getDeclaredConstructor().newInstance();

        Element eventoInicialElement = (Element) doc.getElementsByTagName("eventoInicial").item(0);
        String eventoClassName = eventoInicialElement.getElementsByTagName("clase").item(0).getTextContent();
        String metodoTiempoName = eventoInicialElement.getElementsByTagName("metodoTiempo").item(0).getTextContent();

        // Obtener el tiempo ejecutando el método en la librería mediante reflexión
        Method metodoTiempo = this.libreria.getClass().getMethod(metodoTiempoName);
        Object tiempoObj = metodoTiempo.invoke(this.libreria);
        
        // Castear a double (independientemente si retorna int o double)
        double tiempo = ((Number) tiempoObj).doubleValue();

        this.eventoInicial = (Evento) Class.forName(eventoClassName).getDeclaredConstructor(double.class).newInstance(tiempo);
    }

    public EstadoDelSistema getModelo() { return modelo; }
    public ContadoresEstadisticos getContadores() { return contadores; }
    public GeneradorDeReportes getReporte() { return reporte; }
    public LibreriaDeRutinas getLibreria() { return libreria; }
    public Evento getEventoInicial() { return eventoInicial; }
}
