# Simulador de Eventos Discretos

Este proyecto es un motor de simulación de eventos discretos genérico escrito en Java. Está diseñado para que puedas implementar distintos modelos de simulación.

La arquitectura se basa en Inyección de Dependencias a través de un archivo XML, utilizando *Reflection* para instanciar dinámicamente los componentes de tu modelo.

## Estructura del Motor (Paquete `des`)
El motor de simulación se encuentra en el paquete `des`. **No debes modificar estas clases**, ya que contienen la lógica central:
- `ProgramaPrincipal`: El punto de entrada y ciclo de vida de la simulación.
- `EstadoDelSistema`, `ContadoresEstadisticos`, `GeneradorDeReportes`, `LibreriaDeRutinas`, `Evento`: Clases base que deberás heredar para construir tu modelo.
- `ConfiguradorXML`: Encargado de leer la configuración e instanciar tus clases.

---

## 🚀 ¿Cómo implementar una nueva simulación?

Para crear una nueva simulación, debes seguir estos dos pasos principales: programar las clases de tu modelo y poner sus nombres en el archivo de configuración XML.

### Paso 1: Crear los paquetes y clases

1. **Crear un paquete nuevo:** Crea un paquete para tu problema, por ejemplo: `ejercicio2`. Puedes subdividirlo internamente (ej. `ejercicio2.estadoDelSistema`, `ejercicio2.eventos`).
2. **Crear las clases base:** Dentro de tu paquete, crea las clases obligatorias heredando de las bases del motor:
   - Una clase que herede/implemente `EstadoDelSistema`.
   - Una clase que herede/implemente `ContadoresEstadisticos`.
   - Una clase que herede/implemente `GeneradorDeReportes`.
   - Una clase que herede/implemente `LibreriaDeRutinas` (aquí pondrás los métodos que generan números/tiempos aleatorios).
3. **Crear los Eventos:** Crea tantas clases como eventos primarios tenga tu modelo, asegurándote de que todas hereden de la clase abstracta `Evento`.

4. **Crear las entidades:** Crea tantas entidades como necesites para tu modelo.

### Paso 2: Configurar `configuracion.xml`

Una vez que programaste tus clases, debes decirle al motor dónde encontrarlas. Abre el archivo `configuracion.xml` en la raíz del proyecto y reemplaza los comentarios por las **rutas completas (paquete + NombreDeClase)**.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<simulacion>
    <!-- 1. Los 4 componentes principales -->
    <modelo>ejercicio1.estadoDelSistema.Ejercicio1</modelo>
    <contadores>ejercicio1.componentesPropios.ContadoresEjercicio1</contadores>
    <reporte>ejercicio1.componentesPropios.GeneradorDeReportesEjercicio1</reporte>
    <libreria>ejercicio1.componentesPropios.LibreriaDeRutinasEjercicio1</libreria>
    
    <!-- 2. El evento inicial que arranca la simulación -->
    <eventoInicial>
        <!-- La clase de tu primer evento -->
        <clase>ejercicio1.eventos.EventoArribarACola</clase>
        <!-- El nombre del método en TU LibreriaDeRutinas que calcula el tiempo de este evento -->
        <metodoTiempo>tiempoEntreArribosSolicitudes</metodoTiempo>
    </eventoInicial>
</simulacion>
```

### Paso 3: Ejecutar

1. Corre el método `main()` de la clase `des.ProgramaPrincipal`.
2. El `ConfiguradorXML` leerá tu archivo, instanciará las clases que escribiste y el motor de simulación comenzará a funcionar automáticamente usando tu lógica.

## Notas Adicionales
- **Nombres exactos:** Asegúrate de que las rutas en el XML estén escritas exactamente igual que en tu código, respetando mayúsculas y minúsculas. De lo contrario, Java arrojará una excepción de clase no encontrada (`ClassNotFoundException`).
- **Constructores vacíos:** Tus clases de Modelo, Contadores, Reporte y Librería deben tener obligatoriamente un constructor por defecto (sin parámetros) para que el motor pueda instanciarlas.
