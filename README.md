# Código Fuente de Renta Mobiliario App

[Enlace a los archivos en Google Drive](https://drive.google.com/drive/folders/17DRwnZPzZQCkaZLUdQ-IP1cx3haFxCtN?usp=drive_link)

Este repositorio contiene todo el código fuente de la aplicación 'Renta Mobiliario', documentado por pantalla y funcionalidad.
Se incluyen capturas de pantalla de los elementos visuales justo encima de su código XML correspondiente.

## Índice de Archivos e Interfaces
- [AndroidManifest.xml](#AndroidManifestxml)
- [java/com/tuempresa/rentaapp/adapters/AdminProductoAdapter.kt](#javacomtuempresarentaappadaptersAdminProductoAdapterkt)
- [java/com/tuempresa/rentaapp/adapters/NotificacionAdapter.kt](#javacomtuempresarentaappadaptersNotificacionAdapterkt)
- [java/com/tuempresa/rentaapp/adapters/PedidoAdapter.kt](#javacomtuempresarentaappadaptersPedidoAdapterkt)
- [java/com/tuempresa/rentaapp/adapters/ProductoAdapter.kt](#javacomtuempresarentaappadaptersProductoAdapterkt)
- [java/com/tuempresa/rentaapp/models/FurnitureItem.kt](#javacomtuempresarentaappmodelsFurnitureItemkt)
- [java/com/tuempresa/rentaapp/models/Notificacion.kt](#javacomtuempresarentaappmodelsNotificacionkt)
- [java/com/tuempresa/rentaapp/models/Producto.kt](#javacomtuempresarentaappmodelsProductokt)
- [java/com/tuempresa/rentaapp/models/RentalOrder.kt](#javacomtuempresarentaappmodelsRentalOrderkt)
- [java/com/tuempresa/rentaapp/models/User.kt](#javacomtuempresarentaappmodelsUserkt)
- [java/com/tuempresa/rentaapp/ui/admin/AdminInventarioFragment.kt](#javacomtuempresarentaappuiadminAdminInventarioFragmentkt)
- [java/com/tuempresa/rentaapp/ui/admin/AdminMainActivity.kt](#javacomtuempresarentaappuiadminAdminMainActivitykt)
- [java/com/tuempresa/rentaapp/ui/admin/AdminPedidosFragment.kt](#javacomtuempresarentaappuiadminAdminPedidosFragmentkt)
- [java/com/tuempresa/rentaapp/ui/auth/LoginActivity.kt](#javacomtuempresarentaappuiauthLoginActivitykt)
- [java/com/tuempresa/rentaapp/ui/auth/RegistroActivity.kt](#javacomtuempresarentaappuiauthRegistroActivitykt)
- [java/com/tuempresa/rentaapp/ui/common/NotificacionesFragment.kt](#javacomtuempresarentaappuicommonNotificacionesFragmentkt)
- [java/com/tuempresa/rentaapp/ui/common/PerfilFragment.kt](#javacomtuempresarentaappuicommonPerfilFragmentkt)
- [java/com/tuempresa/rentaapp/ui/user/CatalogoFragment.kt](#javacomtuempresarentaappuiuserCatalogoFragmentkt)
- [java/com/tuempresa/rentaapp/ui/user/ConfirmacionFragment.kt](#javacomtuempresarentaappuiuserConfirmacionFragmentkt)
- [java/com/tuempresa/rentaapp/ui/user/MainActivity.kt](#javacomtuempresarentaappuiuserMainActivitykt)
- [java/com/tuempresa/rentaapp/ui/user/RentasFragment.kt](#javacomtuempresarentaappuiuserRentasFragmentkt)
- [java/com/tuempresa/rentaapp/utils/NotificationHelper.kt](#javacomtuempresarentaapputilsNotificationHelperkt)
- [res/drawable/ic_launcher_background.xml](#resdrawableic_launcher_backgroundxml)
- [res/drawable/ic_launcher_foreground.xml](#resdrawableic_launcher_foregroundxml)
- [res/layout/activity_admin_main.xml](#reslayoutactivity_admin_mainxml)
- [res/layout/activity_login.xml](#reslayoutactivity_loginxml)
- [res/layout/activity_main.xml](#reslayoutactivity_mainxml)
- [res/layout/activity_registro.xml](#reslayoutactivity_registroxml)
- [res/layout/dialog_admin_producto.xml](#reslayoutdialog_admin_productoxml)
- [res/layout/fragment_admin_inventario.xml](#reslayoutfragment_admin_inventarioxml)
- [res/layout/fragment_admin_pedidos.xml](#reslayoutfragment_admin_pedidosxml)
- [res/layout/fragment_catalogo.xml](#reslayoutfragment_catalogoxml)
- [res/layout/fragment_confirmacion.xml](#reslayoutfragment_confirmacionxml)
- [res/layout/fragment_notificaciones.xml](#reslayoutfragment_notificacionesxml)
- [res/layout/fragment_perfil.xml](#reslayoutfragment_perfilxml)
- [res/layout/fragment_rentas.xml](#reslayoutfragment_rentasxml)
- [res/layout/item_admin_producto.xml](#reslayoutitem_admin_productoxml)
- [res/layout/item_notificacion.xml](#reslayoutitem_notificacionxml)
- [res/layout/item_pedido.xml](#reslayoutitem_pedidoxml)
- [res/layout/item_producto.xml](#reslayoutitem_productoxml)
- [res/menu/menu_navegacion.xml](#resmenumenu_navegacionxml)
- [res/menu/menu_navegacion_admin.xml](#resmenumenu_navegacion_adminxml)
- [res/mipmap-anydpi-v26/ic_launcher.xml](#resmipmap-anydpi-v26ic_launcherxml)
- [res/mipmap-anydpi-v26/ic_launcher_round.xml](#resmipmap-anydpi-v26ic_launcher_roundxml)
- [res/values-night/themes.xml](#resvalues-nightthemesxml)
- [res/values/colors.xml](#resvaluescolorsxml)
- [res/values/strings.xml](#resvaluesstringsxml)
- [res/values/themes.xml](#resvaluesthemesxml)
- [res/xml/backup_rules.xml](#resxmlbackup_rulesxml)
- [res/xml/data_extraction_rules.xml](#resxmldata_extraction_rulesxml)

---

<a id='AndroidManifestxml'></a>
### Archivo: `AndroidManifest.xml`

**Propósito general:** Es el manifiesto del proyecto, el archivo donde Android lee qué pantallas existen, qué permisos necesita la app y qué configuración general tiene para poder funcionar.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Define la versión de XML y la codificación de caracteres a usar -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android" <!-- Inicia el archivo de manifiesto de Android y define el espacio de nombres principal -->
    package="com.tuempresa.rentaapp"> <!-- Establece el nombre del paquete único que identifica a esta aplicación -->

    <!-- Permiso para mostrar notificaciones locales (Android 13+) --> <!-- Comentario original: Explica que se pedirá permiso para notificaciones -->
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" /> <!-- Solicita explícitamente al sistema el permiso de notificaciones para versiones nuevas de Android -->

    <!-- Visibilidad de paquetes: requerido en Android 11+ para abrir WhatsApp o el navegador --> <!-- Comentario original: Explica por qué se declaran los paquetes externos a consultar -->
    <queries> <!-- Inicia la sección que declara a qué otras apps puede acceder o ver esta aplicación -->
        <!-- URLs http / https (para api.whatsapp.com como fallback) --> <!-- Comentario original -->
        <intent> <!-- Inicia la declaración de una intención (intent) que la app espera poder resolver -->
            <action android:name="android.intent.action.VIEW" /> <!-- Indica que queremos realizar una acción de vista, típicamente abrir una URL -->
            <data android:scheme="https" /> <!-- Especifica que se filtrarán o buscarán enlaces seguros (https) -->
        </intent> <!-- Cierra la declaración del primer intent -->
        <intent> <!-- Inicia la declaración de una segunda intención -->
            <action android:name="android.intent.action.VIEW" /> <!-- Indica otra acción de vista -->
            <data android:scheme="http" /> <!-- Especifica que también aceptaremos enlaces no seguros (http) -->
        </intent> <!-- Cierra la declaración del segundo intent -->
        <!-- Paquete directo de WhatsApp --> <!-- Comentario original -->
        <package android:name="com.whatsapp" /> <!-- Da permisos para interactuar o consultar si existe WhatsApp normal en el dispositivo -->
        <!-- WhatsApp Business --> <!-- Comentario original -->
        <package android:name="com.whatsapp.w4b" /> <!-- Da permisos para interactuar con WhatsApp Business -->
    </queries> <!-- Cierra el bloque de consultas de paquetes externos -->

    <application <!-- Inicia la configuración general y contenedora de recursos de toda la aplicación -->
        android:allowBackup="true" <!-- Permite que el sistema operativo haga copias de seguridad de los datos de la app -->
        android:icon="@mipmap/ic_launcher" <!-- Define el ícono principal que aparecerá en el menú del celular -->
        android:label="@string/app_name" <!-- Define el nombre de la app referenciando una cadena de texto (string) traducible -->
        android:roundIcon="@mipmap/ic_launcher_round" <!-- Define el ícono circular para ser compatible con ciertos launchers de Android -->
        android:supportsRtl="true" <!-- Habilita el soporte para idiomas que se leen de derecha a izquierda (Right-To-Left) -->
        android:theme="@style/Theme.RentaMobiliarioApp"> <!-- Aplica un estilo global de colores y formas a toda la aplicación -->

        <!-- LOGIN (Pantalla inicial) --> <!-- Comentario original: Indica el registro de la pantalla de inicio de sesión -->
        <activity <!-- Declara una pantalla (Activity) en el sistema -->
            android:name=".ui.auth.LoginActivity" <!-- Indica la ruta relativa de la clase LoginActivity dentro del paquete -->
            android:exported="true"> <!-- Permite que esta actividad pueda ser lanzada por el sistema (es decir, abrirse desde afuera) -->
            <intent-filter> <!-- Inicia el filtro que define cómo se debe lanzar esta pantalla -->
                <action android:name="android.intent.action.MAIN" /> <!-- Indica que esta pantalla es el punto de entrada principal (Main) -->
                <category android:name="android.intent.category.LAUNCHER" /> <!-- Indica que aparecerá su ícono en el cajón de aplicaciones (Launcher) -->
            </intent-filter> <!-- Cierra el filtro de intenciones -->
        </activity> <!-- Cierra la declaración de LoginActivity -->

        <!-- MAIN --> <!-- Comentario original -->
        <activity <!-- Declara la pantalla principal post-inicio de sesión -->
            android:name=".ui.user.MainActivity" <!-- Ruta de la clase MainActivity (para el usuario) -->
            android:exported="false" /> <!-- Bloquea el acceso para que no pueda ser abierta desde fuera de la aplicación (solo desde el Login) -->

        <!-- ADMIN MAIN --> <!-- Comentario original -->
        <activity <!-- Declara la pantalla principal para cuentas administradoras -->
            android:name=".ui.admin.AdminMainActivity" <!-- Ruta de la clase AdminMainActivity -->
            android:exported="false" /> <!-- Bloquea el acceso desde fuera, solo es accesible tras pasar la validación -->

        <!-- REGISTRO --> <!-- Comentario original -->
        <activity <!-- Declara la pantalla para crear nuevas cuentas -->
            android:name=".ui.auth.RegistroActivity" <!-- Ruta de la clase RegistroActivity -->
            android:exported="false" /> <!-- Bloquea su lanzamiento externo directo -->

    </application> <!-- Cierra la etiqueta de configuración de la aplicación -->

</manifest> <!-- Cierra el archivo de manifiesto general -->
```

---

<a id='javacomtuempresarentaappadaptersAdminProductoAdapterkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/adapters/AdminProductoAdapter.kt`

**Propósito general:** Los adaptadores (adapters) son los encargados de tomar las listas de datos (como el catálogo o tus rentas) y mostrarlas en los RecyclerViews de la pantalla. Toman cada elemento de la lista y lo acomodan en su diseño correspondiente visualmente.

#### Código fuent```kotlin
package com.tuempresa.rentaapp.adapters // Declara el paquete en el que se ubica la clase, organizando los adaptadores juntos

import com.tuempresa.rentaapp.R // Importa todos los recursos gráficos y diseños (IDs) de la aplicación (layout, mipmap, etc.)

import android.view.LayoutInflater // Importa la herramienta que sirve para convertir un archivo XML en una vista visual de Java/Kotlin
import android.view.View // Importa la clase base que representa cualquier elemento visual rectangular en la pantalla
import android.view.ViewGroup // Importa la clase que agrupa varias 'Views' dentro de un diseño
import android.widget.Button // Importa el elemento visual de botón clásico
import android.widget.TextView // Importa el elemento visual capaz de mostrar texto en pantalla
import androidx.recyclerview.widget.RecyclerView // Importa el componente de lista rápida y eficiente encargado del reciclaje de vistas
import com.tuempresa.rentaapp.models.FurnitureItem // Importa el modelo de datos de muebles que guardamos o leemos

class AdminProductoAdapter( // Inicia la declaración de la clase del adaptador para productos del administrador
    private var productos: List<FurnitureItem>, // Recibe como primer parámetro una lista de productos inyectada inicialmente
    private val onEditClick: (FurnitureItem) -> Unit, // Recibe una función (lambda) como parámetro que se ejecutará al pulsar "editar" recibiendo un mueble
    private val onDeleteClick: (FurnitureItem) -> Unit // Recibe una función (lambda) como parámetro que reacciona a cuando el usuario pulsa "eliminar"
) : RecyclerView.Adapter<AdminProductoAdapter.AdminViewHolder>() { // Hereda de RecyclerView.Adapter y vincula este adaptador con su propio ViewHolder interno

    class AdminViewHolder(view: View) : RecyclerView.ViewHolder(view) { // Define una clase anidada que "sostiene" (holds) las referencias a los elementos visuales de cada fila
        val tvNombre: TextView = view.findViewById(R.id.tvAdminNombreProd) // Asocia la variable 'tvNombre' interactuando y encontrando el TextView por su ID en el XML
        val tvDesc: TextView = view.findViewById(R.id.tvAdminDescProd) // Encuentra y guarda la referencia al TextView de la descripción
        val tvPrecio: TextView = view.findViewById(R.id.tvAdminPrecioProd) // Encuentra y guarda la referencia al TextView del precio
        val tvStock: TextView = view.findViewById(R.id.tvAdminStockProd) // Encuentra y guarda la referencia al TextView que mostrará el inventario actual
        val btnEditar: Button = view.findViewById(R.id.btnAdminEditar) // Encuentra y vincula el botón de edición
        val btnEliminar: Button = view.findViewById(R.id.btnAdminEliminar) // Encuentra y vincula el botón físico de eliminación
    } // Termina la declaración del ViewHolder responsable

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AdminViewHolder { // Sobrescribe el método que "infla" o crea la vista visualmente por cada celda nueva
        val view = LayoutInflater.from(parent.context) // Obtiene el "inflador" desde el contexto de la ventana principal
            .inflate(R.layout.item_admin_producto, parent, false) // Transforma (infla) el diseño XML estático en una vista (View) real lista para ser mostrada
        return AdminViewHolder(view) // Devuelve un nuevo "sostenedor" envolviendo e instanciando las variables con la nueva vista recién inflada
    } // Termina el método

    override fun onBindViewHolder(holder: AdminViewHolder, position: Int) { // Este método se llama para "enlazar" datos específicos a la vista de una posición exacta
        val producto = productos[position] // Extrae de la lista general de productos cuál es el elemento que debe ir en esta fila específica (position)

        holder.tvNombre.text = producto.nombreProducto // Envía el nombre del producto leído de la base de datos al componente visual tvNombre
        holder.tvDesc.text = producto.descripcion // Escribe la descripción sobre el TextView visual
        holder.tvPrecio.text = "$${producto.precio}" // Concatena el signo de dólar e inyecta el valor monetario en tiempo de ejecución
        holder.tvStock.text = "Stock: ${producto.totalStock} (Disp: ${producto.existencia})" // Formatea una cadena de texto para mostrar tanto inventario total como disponible real

        holder.btnEditar.setOnClickListener { onEditClick(producto) } // Asigna un evento de click al botón Editar de ESA celda que ejecuta la lambda inyectada y le pasa el producto
        holder.btnEliminar.setOnClickListener { onDeleteClick(producto) } // Asigna otro evento al botón Eliminar para emitir una orden de borrado hacia la pantalla principal (Fragment)
    } // Termina la declaración del vinculo por fila

    override fun getItemCount(): Int = productos.size // Informa al RecyclerView cuántas filas debe renderizar en total, basado en el tamaño dinámico de la lista

    fun actualizarLista(nuevaLista: List<FurnitureItem>) { // Función auxiliar creada para poder meter nuevos datos cuando Firestore notifique un cambio en la base
        productos = nuevaLista // Reemplaza la lista vieja en memoria por la nueva lista que acabamos de recibir
        notifyDataSetChanged() // Alerta forzosamente al RecyclerView de que todos sus datos cambiaron para que vuelva a "onBindViewHolder" y repinte la pantalla entera
    } // Termina la función de actualización
} // Cierra la clase AdminProductoAdapter
```    }
}

```

---

<a id='javacomtuempresarentaappadaptersNotificacionAdapterkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/adapters/NotificacionAdapter.kt`

**Propósito general:** Los adaptadores (adapters) son los encargados de tomar las listas de datos (como el catálogo o tus rentas) y mostrarlas en los RecyclerViews de la pantalla. Toman cada elemento de la lista y lo acomodan en su diseño correspondiente visualmente.

#### Código f```kotlin
package com.tuempresa.rentaapp.adapters // Declara el paquete en el que se ubica la clase para mantener los adaptadores de notificaciones ordenados

import android.view.LayoutInflater // Importa la herramienta de inflado visual (XML a UI Java virtual)
import android.view.View // Importa la clase principal base para las vistas visuales interactuables de la Interfaz
import android.view.ViewGroup // Agrupa las vistas en colecciones jerárquicas como layouts
import android.widget.Button // Importa las propiedades y métodos para botones físicos
import android.widget.TextView // Importa la función de renderización de texto para la interfaz gráfica
import androidx.recyclerview.widget.RecyclerView // Importa el RecyclerView para la administración avanzada y eficiente del listado
import com.tuempresa.rentaapp.R // Importa el registro absoluto de IDs (R) del proyecto
import com.tuempresa.rentaapp.models.Notificacion // Llama al modelo Notificacion donde se estructura la información de los avisos
import java.text.SimpleDateFormat // Importa la herramienta de formato estándar de fechas para Java/Kotlin
import java.util.Date // Importa la clase para instanciar fechas o periodos temporales
import java.util.Locale // Importa la configuración predeterminada de origen regional o país para poder darle el idioma base a la fecha

class NotificacionAdapter( // Comienza la clase para adaptar las notificaciones visuales en celdas
    private var notificaciones: List<Notificacion>, // Lista inicial privada con la información bruta traída de base de datos
    private val onEliminarClick: (Notificacion) -> Unit // Función de devolución (callback) que comunica al fragmento cuándo borrar un mensaje
) : RecyclerView.Adapter<NotificacionAdapter.NotificacionViewHolder>() { // Extiende la clase superior Adapter inyectando la referencia explícita del ViewHolder actual

    class NotificacionViewHolder(view: View) : RecyclerView.ViewHolder(view) { // Subclase obligatoria que funciona estáticamente cacheando la Vista local en la celda
        val tvTitulo: TextView = view.findViewById(R.id.tvNotificacionTitulo) // Localiza dinámicamente el componente tipo TextView para el título
        val tvFecha: TextView = view.findViewById(R.id.tvNotificacionFecha) // Localiza dinámicamente el componente tipo TextView para inyectar un string del Timestamp
        val tvCuerpo: TextView = view.findViewById(R.id.tvNotificacionCuerpo) // Localiza la descripción general de la alerta para mostrar al usuario
        val btnEliminar: Button = view.findViewById(R.id.btnEliminarNotificacion) // Localiza el control físico de la acción de eliminar o rechazar
    } // Finaliza la declaración de atributos visuales anidados en esta mini-vista

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NotificacionViewHolder { // Permite generar memoria dinámica para inyectar cada nueva vista inflada
        val view = LayoutInflater.from(parent.context) // Toma la caja principal del entorno de la aplicación a modo centralizado visual
            .inflate(R.layout.item_notificacion, parent, false) // Compila y retorna en tiempo real el XML 'item_notificacion.xml' como objetos reales en RAM
        return NotificacionViewHolder(view) // Crea efectivamente esta celda cacheada y devuelta a quien lo solicite desde RecyclerView base
    } // Cierra la función de creación manual

    override fun onBindViewHolder(holder: NotificacionViewHolder, position: Int) { // Inserta visualmente la información según la fila dada por el bucle interno
        val notificacion = notificaciones[position] // Busca la fila particular leyendo la posición en la cuenta general base de arreglos

        holder.tvTitulo.text = notificacion.titulo // Iguala el String extraído del modelo con el que procesará la parte gráfica interactuante (tvTitulo)
        holder.tvCuerpo.text = notificacion.cuerpo // Iguala el cuerpo extenso textual para permitir lectura profunda en el recuadro UI
        
        val sdf = SimpleDateFormat("dd/MM/yyyy HH:mm", Locale.getDefault()) // Formatea de forma local la etiqueta del Long Timestamp general UTC
        holder.tvFecha.text = sdf.format(Date(notificacion.timestamp)) // Construye un objeto 'Date', lo procesa, formatea y vincula al label de la época

        holder.btnEliminar.setOnClickListener { // Engancha el control de eventos (escuchador) por parte del pulso de ratón/dedo en la pantalla general
            onEliminarClick(notificacion) // Delega la ejecución o respuesta llamando al trigger con toda la entidad para procesarlo en el nivel origen
        } // Concluye el comportamiento atado sobre dicho botón
    } // Culmina la función onBind general que junta Datos con Gráficos

    override fun getItemCount(): Int = notificaciones.size // Expresa de nuevo la dimensión máxima del bucle actual limitándolo para el procesador total

    fun actualizarLista(nuevaLista: List<Notificacion>) { // Añade flexibilidad dando la orden base local de refresco reactivo general de este adaptador
        notificaciones = nuevaLista // Destruye y asigna directamente los viejos datos y punteros apuntando al nuevo array o list
        notifyDataSetChanged() // Refresca completamente (Dibuja/Invalida) para todos los elementos, renderizando y validando a la vez cualquier UI
    } // Fín de la función delegadora interna
} // Fín de la construcción clase Adapter de Notificacion
```()
    }
}

```

---

<a id='javacomtuempresarentaappadaptersPedidoAdapterkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/adapters/PedidoAdapter.kt`

**Propósito general:** Los adaptadores (adapters) son los encargados de tomar las listas de datos (como el catálogo o tus rentas) y mostrarlas en l```kotlin
package com.tuempresa.rentaapp.adapters // Declara el paquete donde residen los adaptadores de la app

import com.tuempresa.rentaapp.R // Importa los recursos, IDs y layouts generados por Android

import android.graphics.Color // Importa la herramienta de color para cambiar textos estéticamente (rojo, verde, etc.)
import android.view.LayoutInflater // Importa la clase necesaria para convertir archivos XML a componentes visuales
import android.view.View // Importa la clase base View
import android.view.ViewGroup // Importa contenedores de vistas (layouts)
import android.widget.Button // Importa la clase gráfica del elemento Botón
import android.widget.LinearLayout // Importa el contenedor lineal que apila elementos
import android.widget.TextView // Importa la clase visual para las etiquetas de texto puro
import androidx.recyclerview.widget.RecyclerView // Importa el RecyclerView para renderizar listas dinámicas eficientemente
import com.tuempresa.rentaapp.models.OrderStatus // Importa el Enum que dicta si el pedido está PENDIENTE, EN PROGRESO, etc.
import com.tuempresa.rentaapp.models.RentalOrder // Importa la estructura de datos que representa una Orden de Renta completa
import java.text.SimpleDateFormat // Herramienta para formatear visualmente timestamps (milisegundos) a strings
import java.util.Date // Objeto Date clásico de Java
import java.util.Locale // Herramienta para localización/idioma al parsear fechas

class PedidoAdapter( // Inicializa el adaptador de pedidos (usado tanto por admin como por cliente)
    private var pedidos: List<RentalOrder>, // Inyecta la lista dinámica donde vienen los pedidos de la BD
    private val esAdmin: Boolean, // Bandera booleana (true/false) para saber si la vista la abrió un Administrador o Cliente
    private val onEstadoCambiado: ((RentalOrder, OrderStatus) -> Unit)? = null, // Función lambda opcional (admin) para cambiar el estatus del pedido
    private val onCustomerEliminar: ((RentalOrder) -> Unit)? = null, // Lambda opcional (cliente) para que el cliente borre el pedido
    private val onCustomerModificar: ((RentalOrder) -> Unit)? = null, // Lambda opcional (cliente) para solicitar un cambio de fechas
    private val onCustomerArchivar: ((RentalOrder) -> Unit)? = null, // Lambda opcional para que un cliente oculte un pedido del historial 
    private val onAdminEliminar: ((RentalOrder) -> Unit)? = null // Lambda opcional (admin) para destruir permanentemente el pedido
) : RecyclerView.Adapter<PedidoAdapter.PedidoViewHolder>() { // Hereda de Adapter de RecyclerView inyectando la clase holder personalizada abajo

    class PedidoViewHolder(view: View) : RecyclerView.ViewHolder(view) { // Subclase obligatoria de retención visual
        val tvId: TextView = view.findViewById(R.id.tvPedidoId) // Vincula variable con el elemento texto ID visual
        val tvEstado: TextView = view.findViewById(R.id.tvPedidoEstado) // Vincula con el estado visual del pedido
        val tvFechas: TextView = view.findViewById(R.id.tvPedidoFechas) // Vincula con el recuadro de fechas del pedido
        val tvTotal: TextView = view.findViewById(R.id.tvPedidoTotal) // Vincula con el costo monetario total
        val tvItems: TextView = view.findViewById(R.id.tvPedidoItems) // Vincula con el sumario desglosado de muebles
        val llAdmin: LinearLayout = view.findViewById(R.id.llAdminControles) // Grupo de vistas exclusivas de administrador
        val separator: View = view.findViewById(R.id.viewSeparador) // Línea visual separatoria extra dibujada
        val btnDevuelto: Button = view.findViewById(R.id.btnMarcarDevuelto) // Botón admin para marcar regreso de mercancía
        val btnCancelado: Button = view.findViewById(R.id.btnMarcarCancelado) // Botón admin para rechazar
        val btnAdminEliminar: Button = view.findViewById(R.id.btnAdminEliminar) // Botón admin de purga
        
        val llCustomer: LinearLayout = view.findViewById(R.id.llCustomerControles) // Grupo de vistas para el control del cliente
        val btnModificarFechas: Button = view.findViewById(R.id.btnModificarFechas) // Botón cliente pedir extender fecha
        val btnCustomerEliminar: Button = view.findViewById(R.id.btnCustomerEliminar) // Botón cliente arrepentirse
        val btnCustomerArchivar: Button = view.findViewById(R.id.btnCustomerArchivar) // Botón cliente esconder
    } // Finaliza sub clase constructora

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PedidoViewHolder { // Renderizador de XML
        val view = LayoutInflater.from(parent.context) // Toma contexto superior
            .inflate(R.layout.item_pedido, parent, false) // Infla archivo ítem_pedido 
        return PedidoViewHolder(view) // Devuelve constructor a memoria libre
    } // Fin inflado

    override fun onBindViewHolder(holder: PedidoViewHolder, position: Int) { // Mapeo de Variables con Vistas Dinámicas
        val pedido = pedidos[position] // Detecta posición del elemento de matriz enviada

        holder.tvId.text = "Pedido #${pedido.id.take(6).uppercase()}" // Recorta el ID UUID brutal a solo 6 caracteres amigables y lo pinta
        holder.tvTotal.text = "Total: $${pedido.totalCost}" // Construye costo amigable 

        when (pedido.status) { // Interruptor switch case para dibujar colores visualmente en la palabra Estatus
            OrderStatus.PENDING -> { // Si está pendiente de checar
                holder.tvEstado.text = "PENDIENTE" // Escribe mayúsculas
                holder.tvEstado.setTextColor(Color.parseColor("#FF9800")) // Pinta naranja
            } // Fin caso
            OrderStatus.APPROVED -> { // Si se aprueba
                holder.tvEstado.text = "APROBADO" // Escribe en pantalla
                holder.tvEstado.setTextColor(Color.parseColor("#2196F3")) // Pinta azul cielo bonito
            } // Fin
            OrderStatus.IN_PROGRESS -> { // Si está siendo entregado o actualmente usándose
                holder.tvEstado.text = "EN PROGRESO" // Escribe UI
                holder.tvEstado.setTextColor(Color.parseColor("#9C27B0")) // Pinta color morado fuerte
            } // fin
            OrderStatus.RETURNED -> { // Si ya se completó exitoso
                holder.tvEstado.text = "REGRESADO" // Dice Regresado
                holder.tvEstado.setTextColor(Color.parseColor("#4CAF50")) // Lo pinta Verde
            } // Fin
            OrderStatus.CANCELLED -> { // Operación detenida o cliente denegado 
                holder.tvEstado.text = "CANCELADO" // Texto amigable rojo
                holder.tvEstado.setTextColor(Color.RED) // Usa constante Color Roja nativa
            } // FIN switch
        } // Acaba WHEN logic

        val sdf = SimpleDateFormat("dd/MM/yy", Locale.getDefault()) // Formato tipo día / mes / año corto para mostrar fechas
        val fe = sdf.format(Date(pedido.deliveryDate)) // Se da fecha inicial a formato visual humano
        val fd = sdf.format(Date(pedido.returnDate)) // Se aplica mismo formateador a término del arrendamiento
        holder.tvFechas.text = "Entrega: $fe  |  Devolución: $fd" // Dibuja y concatena texto visual super amigable 

        // Mostrar sumario de items expandido  // Comentario original del programador
        var cants = "Artículos:" // Variable vacía para empezar concatenación
        pedido.items.forEach {  // Bucle por toda la cesta que tiene este pedido particular
            val nombre = it.furnitureName.ifEmpty { "Articulo ID:${it.furnitureId.take(4)}" } // Fallback si se corrompe base de datos, imprime id recortado
            cants += "\n- ${it.quantity}x $nombre" // Pinta la unidad multiplicado por su nombre usando salto línea \n
        } // Termina el foreach
        holder.tvItems.text = cants // Enlaza String construido al UI contenedor respectivo
        holder.tvItems.visibility = View.VISIBLE // Muestra y quita GONE de este layout por default

        if (esAdmin) { // Lógica dinámica dependiendo del rol Inyectado, si resulta que abría Admin la pantalla:
            holder.llAdmin.visibility = View.VISIBLE // Se muestra botonearia de dueños de tienda
            holder.separator.visibility = View.VISIBLE // Línea divisoria amigable
            holder.llCustomer.visibility = View.GONE // SE ELIMINA DE LA INTERFAZ y ocultara TODOS los botones del cliente

            // Solo mostrar controles si NO ha sido cerrado // Comentario lógico extra
            if (pedido.status == OrderStatus.RETURNED || pedido.status == OrderStatus.CANCELLED) { // Validando si estado es Irreversible
                holder.btnDevuelto.visibility = View.GONE // Borrar botón regresar ya es redundante
                holder.btnCancelado.visibility = View.GONE // Botón de cancelar redundante, ya se rechazó
                holder.btnAdminEliminar.visibility = View.VISIBLE // SOLO se permite destruir por completo del historial por el Dueño
            } else { // Sin embargo si todavía está vivo el pedido...
                holder.btnDevuelto.visibility = View.VISIBLE // Enseña Botones de avanzar
                holder.btnCancelado.visibility = View.VISIBLE // O enseñar para abortar tarea
                holder.btnAdminEliminar.visibility = View.GONE // El admin NO puede borrar el pedido hasta resolverlo
            } // Fin condicional visual admin interior

            holder.btnDevuelto.setOnClickListener { onEstadoCambiado?.invoke(pedido, OrderStatus.RETURNED) } // Lanza lambda disparadora notificando a Fragment superior con ENUM
            holder.btnCancelado.setOnClickListener { onEstadoCambiado?.invoke(pedido, OrderStatus.CANCELLED) } // Lambda abortar
            holder.btnAdminEliminar.setOnClickListener { onAdminEliminar?.invoke(pedido) } // Disparador aniquilar Firebase Object

            // Permite marcar aprobado (solo visual temporal) // Comentario original
            holder.itemView.setOnLongClickListener { // Lógica para mantener pulsada la fila entera con el dedo
                 if (pedido.status == OrderStatus.PENDING) { // Verifica el condicional solo del pendiente
                     onEstadoCambiado?.invoke(pedido, OrderStatus.APPROVED) // Emite que el negocio lo aprobó y pasaremos mercancías a uso
                 } // fin if
                 true // Booleano retornado requirido por click prolongado
            } // Cierre lógico acción dedo
        } else { // AL CONTRARIO SI ES EL CLIENTE.... (se evalúa else del isAdmin booleano)
            holder.llAdmin.visibility = View.GONE // Quita los Botónes de avanzar Dueño
            
            if (pedido.status == OrderStatus.PENDING) { // Validando visual cliente vivo
                holder.llCustomer.visibility = View.VISIBLE // Muestra botonera personal cliente
                holder.separator.visibility = View.VISIBLE // Separador 
                
                holder.btnModificarFechas.visibility = View.VISIBLE // Dejarle extender
                holder.btnCustomerEliminar.visibility = View.VISIBLE // Dejarle borrar/abortar antes que le acepten la Orden final Dueño
                holder.btnCustomerArchivar.visibility = View.GONE // Impedir archivar
                
                holder.btnModificarFechas.setOnClickListener { onCustomerModificar?.invoke(pedido) } // Llama acción Cliente editar db
                holder.btnCustomerEliminar.setOnClickListener { onCustomerEliminar?.invoke(pedido) } // Llama acción de Delete
            } else if (pedido.status == OrderStatus.RETURNED || pedido.status == OrderStatus.CANCELLED) { // Si pedido murio de cliente final..
                holder.llCustomer.visibility = View.VISIBLE // Mostrar layout cliente normal
                holder.separator.visibility = View.VISIBLE // Mostrar linea 
                
                holder.btnModificarFechas.visibility = View.GONE // Oculta acciones de vida lógica
                holder.btnCustomerEliminar.visibility = View.GONE // Ocultar arrepentimiento general
                holder.btnCustomerArchivar.visibility = View.VISIBLE // SI dejar ahora presionar Archivar historial propio visual del Local device user
                
                holder.btnCustomerArchivar.setOnClickListener { onCustomerArchivar?.invoke(pedido) } // Tirarlo usando lambda de Ocultado flag BD
            } else { // Cualquier otro estado como PROGRESO
                holder.llCustomer.visibility = View.GONE // Apaga su panel entero
                holder.separator.visibility = View.GONE // Ocultar la línea UI
            } // Fin estado anidados cliente
        } // Fin rol global validación
    } // FIN función gorda BINDER

    override fun getItemCount(): Int = pedidos.size // Devolver forzosamente cuantas filas tiene

    fun actualizarLista(nuevaLista: List<RentalOrder>) { // Permitir la inyección posterior de Firebase 
        pedidos = nuevaLista // Destruir referencia
        notifyDataSetChanged() // Refresca reciclando de cero todos los campos UI del RecyclerView
    } // Fun over
} // CLASS OVER
```): Int = pedidos.size

    fun actualizarLista(nuevaLista: List<RentalOrder>) {
        pedidos = nuevaLista
        notifyDataSetChanged()
    }
}

```

---

<a id='javacomtuempresarentaappadaptersProductoAdapterkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/adapters/ProductoAdapter.kt`

**Propósito general:** Los adaptadores (adapters) son los encargados de tomar las listas de datos (como el catálogo o tus rentas) y mostrarla```kotlin
package com.tuempresa.rentaapp.adapters // Empaqueta logicamente este adaptador usado por los usuarios en el catálogo

import com.tuempresa.rentaapp.R // Rutas e ids

import com.tuempresa.rentaapp.models.Producto // DataClass compuesto del mueble + el valor local de cantidad que el cliente desea sumar al coche de compras

import android.graphics.Color // Android graficadora estática
import android.view.LayoutInflater // Conversor a View
import android.view.View // Recuadro virtual interactivo
import android.view.ViewGroup // Contenedor visual
import android.widget.Button // UI base para disparadores clickeables
import android.widget.TextView // Controlador de Strings pintados en screen
import androidx.recyclerview.widget.RecyclerView // Control maestro de UI listas larguísimas

class ProductoAdapter( // Define la clase del Adaptador para el Catálogo virtual del lado del cliente
    private val lista: List<Producto>, // Recibe lista de Mueble y valor de cesta inicial numérico
    private val listener: OnCantidadChangeListener // Pide Interfaz listener (notificador) para enviarle al fragmento los conteos
) : RecyclerView.Adapter<ProductoAdapter.ViewHolder>() { // Sigue las convenciones obligatorias de herencia para listas eficientes

    interface OnCantidadChangeListener { // Declaración de contrato para que alguien (El Fragment Principal) escuche estas alertas
        fun onCantidadChanged() // Regla base que se va a encargar de decirle al principal que hay nueva información interactuada para recalcular carrito
    } // Cierra pseudo interface

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) { // Holder sub-clase base para anclar con Layouts XML
        val nombre: TextView = view.findViewById(R.id.tvNombre) // Vincula ID tvNombre
        val descripcion: TextView = view.findViewById(R.id.tvDescripcion) // Vincula ID desc
        val precio: TextView = view.findViewById(R.id.tvPrecio) // Vincula precio numérico
        val stockDisp: TextView = view.findViewById(R.id.tvStockDisponible) // Contador visual textual de stock base general de Firebase
        val cantidad: TextView = view.findViewById(R.id.tvCantidad) // Label dinámico central del contador entre menos y mas
        val btnMas: Button = view.findViewById(R.id.btnMas) // Controles de UI sumatorios
        val btnMenos: Button = view.findViewById(R.id.btnMenos) // Controles para deducir cesta
    } // Termina Variables Holder de esta celda única

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder { // Convierte el Layout genérico en algo manipulable memoria
        val view = LayoutInflater.from(parent.context) // Usar motor conversor superior
            .inflate(R.layout.item_producto, parent, false) // Referenciar archivo layout de una Card normal a crear
        return ViewHolder(view) // Mandar memoria para posterior Cache list processing de Android
    } // End creation

    override fun onBindViewHolder(holder: ViewHolder, position: Int) { // Recibe evento cíclico para rellenar datos concretos a la variable en pantalla
        val p = lista[position] // Detectamos posición del bucle iterativo de RecyclerView
        val item = p.furniture // Extraccion rápida solo de propiedad mobiliaria

        holder.nombre.text = item.nombreProducto // Envío Nombre
        holder.descripcion.text = item.descripcion // Envío Desc general textual
        holder.precio.text = "$${item.precio}" // Concatenar string dólar con el float price numérico
        
        holder.stockDisp.text = "Disponibles: ${item.existencia}" // String Interpolator con datos traidos
        if (item.existencia == 0) { // Lógica validando error, si no hay inventario restante....
            holder.stockDisp.setTextColor(Color.RED) // Pinta texto en rojo peligro agotado
            holder.stockDisp.text = "Agotado" // Modifica label visual crípticamente 
        } else { // Pero si tuvieramos el objeto físico en Bodega:
            holder.stockDisp.setTextColor(Color.parseColor("#4CAF50")) // Color Verde bandera bonito HEX
        } // Fin ui condicional lógica

        holder.cantidad.text = p.cantidadSeleccionada.toString() // Mostrar por default 0 si el cliente no le ha picado nada

        holder.btnMas.setOnClickListener { // Engancha Listener Clickeo a UI '+'
            if (p.cantidadSeleccionada < item.existencia) { // Evalúa que no puedas robarte y sacar artículos que no existen mágicamente
                p.cantidadSeleccionada++ // Suma el valor integer de su cantidad memoria local
                holder.cantidad.text = p.cantidadSeleccionada.toString() // Forzar repintado visual local celda
                listener.onCantidadChanged() // Obligamos AVISAR a Fragment Catálogo que se tocó el estado y debe recalcular abajo el dinero y botones de proceder OrderTotal
            } // Fin condicional +
        } // End of Listener click positive

        holder.btnMenos.setOnClickListener { // Enganche Action Menos Deducción
            if (p.cantidadSeleccionada > 0) { // Jamás puede haber menos de 0 en la cesta visual actual (-1 bugs)
                p.cantidadSeleccionada-- // Resta lógicamente memory var 
                holder.cantidad.text = p.cantidadSeleccionada.toString() // Recrea texto en vista
                listener.onCantidadChanged() // Avisa idéntico a padre Fragmento recalcúlate a tí mismo general CartView
            } // Condicional over
        } // Minus logic UI end listener
    } // End binder principal func

    override fun getItemCount() = lista.size // Devuelve cantidad base máxima para medir listas forzoso nativo
} // End Archivo de clase
```idadSeleccionada.toString()
                listener.onCantidadChanged()
            }
        }
    }

    override fun getItemCount() = lista.size
}

```

---

<a id='javacomtuempresarentaappmodelsFurnitureItemkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/models/FurnitureItem.kt`

**Propósito general:** Este paquete define las estructuras de datos, o 'modelos', que se usan en todo el proyecto. Básicamente, son los moldes para crear objetos como usuarios, muebles y pedidos, facilitando el guardar y leer datos de Firebase.

#### Código fuente completo:

```kotlin
package com.tuempresa.rentaapp.models // Ubicación del paquete "Modelos"

data class FurnitureItem( // Define un objeto de datos (Data Class) que automáticamente genera métodos como toString y copia para cada mueble
    val id: String = "", // Identificador único UUID autogenerado (Texto)
    val nombreProducto: String = "", // Título del artículo a rentar (Texto)
    val descripcion: String = "", // Párrafo explicativo del artículo (Texto)
    val precio: Double = 0.0, // Representación numérica con decimales para el costo base
    val totalStock: Int = 0, // Inventario físico total comprado por el local (Entero)
    val existencia: Int = 0, // Inventario dinámico que se resta al rentar sin alterar el totalStock
    val imageUrl: String = "" // String con la URL de Firebase Storage apuntando a la foto
) // Fín de la declaración del molde
```

---

<a id='javacomtuempresarentaappmodelsNotificacionkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/models/Notificacion.kt`

**Propósito general:** Este paquete define las estructuras de datos, o 'modelos', que se usan en todo el proyecto. Básicamente, son los moldes para crear objetos como usuarios, muebles y pedidos, facilitando el guardar y leer datos de Firebase.

#### Código fuente completo:

```kotlin
package com.tuempresa.rentaapp.models // Define el espacio lógico Models general

data class Notificacion( // Data class que transporta notificaciones PUSH u orgánicas
    val id: String = "", // Identificador autogenerado texto aleatorio
    val paraRol: String? = null, // String que puede ser Nulo (?), determina si es mensaje solo para "ADMINISTRADOR"
    val paraUserId: String? = null, // String nullable (?), determina si debe llegarle solo al ID específico del cliente
    val titulo: String = "", // Encabezado de la alerta generada
    val cuerpo: String = "", // Descripción profunda o instrucción de lo que pasa
    val leido: Boolean = false, // Booleano bandera para saber si ocultar el circulito rojo (true/false)
    val timestamp: Long = 0L // Longitud numérica gigante (Long) para formato de milisegundos desde Época Epoch Unix (1970)
) // Estructura final Notificacion
```

---

<a id='javacomtuempresarentaappmodelsProductokt'></a>
### Archivo: `java/com/tuempresa/rentaapp/models/Producto.kt`

**Propósito general:** Este paquete define las estructuras de datos, o 'modelos', que se usan en todo el proyecto. Básicamente, son los moldes para crear objetos como usuarios, muebles y pedidos, facilitando el guardar y leer datos de Firebase.

#### Código fuente completo:

```kotlin
package com.tuempresa.rentaapp.models // Define el espacio lógico de Mapeo abstracto

import com.tuempresa.rentaapp.models.FurnitureItem // Importa entidad Mueble
import java.io.Serializable // Importa interfaz necesaria para poder pasar objetos enteros entre pantallas (Fragments)

data class Producto( // Clase modelo temporal, no se guarda directamente en Firebase, solo es usada en Sesion RAM 
    val furniture: FurnitureItem, // Instancia estática del mueble
    var cantidadSeleccionada: Int = 0 // Variable mutable (var) para el carrito de compras donde irá creciendo a voluntad
) : Serializable // Termina la clase afirmando que implementa Serializable para el Bundle Android

```

---

<a id='javacomtuempresarentaappmodelsRentalOrderkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/models/RentalOrder.kt`

**Propósito general:** Este paquete define las estructuras de datos, o 'modelos', que se usan en todo el proyecto. Básicamente, son los moldes para crear objetos como usuarios, muebles y pedidos, facilitando el guardar y leer datos de Firebase.

#### Código fuente completo:

```kotlin
package com.tuempresa.rentaapp.models // Agrupa este objeto bajo data transfer objects (DTO - Models)

data class RentalOrder( // Estructura compleja de una reservación y alquiler completado
    val id: String = "", // Super ID del pedido para todo el backend texto plano
    val userId: String = "", // UUID del dueño que hizo el pago
    val items: List<CartItem> = emptyList(), // Arreglo inyectado (lista) estática de los conceptos adquiridos (Congelados a la fecha)
    val deliveryDate: Long = 0L, // Fecha programada para que los cargadores entreguen Muebles
    val returnDate: Long = 0L, // Fecha programada para que la Flete pase a recogerlos a domicilio
    val status: OrderStatus = OrderStatus.PENDING, // Estado usando la enumeración para mayor seguridad de tipos y no cadenas sueltas
    val paymentStatus: PaymentStatus = PaymentStatus.PENDING, // Estado financiero (si fió o ya liquidó)
    val totalCost: Double = 0.0, // Moneda acumulada cobrada al tarjeta del cliente con decimales
    val paymentMethod: String = "", // Cash, Tarjeta, Oxxo Pay
    val archivedByCustomer: Boolean = false // Booleano personal individualizado para vaciar el UI cliente sin borrar BD general financiera
) // fin objeto

data class CartItem( // Sub Objeto incrustado en el pedido (No tiene tabla propia en Firebase) a modo JSON List
    val furnitureId: String = "", // ID extraído para rastreo en caso de anular y devolver stock
    val furnitureName: String = "", // Fija estáticamente el nombre del artículo por si al día siguiente el Admin lo renombra
    val quantity: Int = 0, // Articulos pedidos que debieron salir de bodega
    val pricePerItem: Double = 0.0 // Congela el precio pagado ese mismo día, sin importar si mañana hay inflación de costo
) // Fin objeto incrustado

enum class OrderStatus { // Lista inmutable estricta que representa posibles estados base limitados
    PENDING, // Ingresado pero no confirmado / pagado
    APPROVED, // Acepto condiciones por admin
    IN_PROGRESS, // En calle, rentado actualmente, en uso
    RETURNED, // Culminó, se devuelven objetos a la matriz
    CANCELLED // Aborto de misión
} // Fin del ENUM order

enum class PaymentStatus { // Opciones acotadas del pago del balance de la deuda
    PENDING, // Adeuda
    PAID, // Liquidado a ceros
    REFUNDED // Se regresó integro tras pelear
} // final class Pago
```

---

<a id='javacomtuempresarentaappmodelsUserkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/models/User.kt`

**Propósito general:** Este paquete define las estructuras de datos, o 'modelos', que se usan en todo el proyecto. Básicamente, son los moldes para crear objetos como usuarios, muebles y pedidos, facilitando el guardar y leer datos de Firebase.

#### Código fuente completo:

```kotlin
package com.tuempresa.rentaapp.models // Envoltorio

data class User( // Contenedor que sincroniza el perfil base Firebase User con Firestore Public data
    val id: String = "", // Su uid inmodificable global
    val nombreUsuario: String = "", // Nombre de fantasía o personal
    val email: String = "", // Correo de recuperación 
    val telefono: String = "", // Móvil whatsapp de comunicación
    val role: Role = Role.CLIENTE // Por defecto siempre y bajo toda circunstancia, eres cliente (ENUM) al registrar 
) // Fin datos de usuario

enum class Role { // Restringe las dos únicas personalidades que rutean a diferentes Main Activitys
    CLIENTE, ADMINISTRADOR // Nivel base, Nivel Dios 
} // End enum
```

---

<a id='javacomtuempresarentaappuiadminAdminInventarioFragmentkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/ui/admin/AdminInve```kotlin
package com.tuempresa.rentaapp.ui.admin // Paquete donde se ubican todas las vistas exclusivas de administrador

import com.tuempresa.rentaapp.R // Importación de la ruta estática para enlazar XML con el código

import com.tuempresa.rentaapp.models.Producto // Molde base local
import com.tuempresa.rentaapp.adapters.AdminProductoAdapter // Clase que sabe cómo dibujar la lista del inventario

import android.app.AlertDialog // Gestor de ventanas modales / popups del sistema base
import android.os.Bundle // Objeto que guarda el estado que pasa el SO a la vista al crearse
import android.view.LayoutInflater // Convertidor de Layout
import android.view.View // Objeto UI Visual
import android.view.ViewGroup // Contenedor visual gigante
import android.widget.Button // Botones convencionales
import android.widget.EditText // Campos de formulario para que el dueño escriba
import android.widget.TextView // Campos solo lectura tipografía
import android.widget.Toast // Notificación flash flotante que aparece abajo en negro
import androidx.fragment.app.Fragment // Clase maestra para incrustar pedazos de UI sin hacer nuevas Activities completas
import androidx.recyclerview.widget.LinearLayoutManager // Director de orquesta del scroll del listview 
import com.google.firebase.firestore.FirebaseFirestore // Librería Core de Base de Datos en Tiempo Real Firebase
import com.tuempresa.rentaapp.databinding.FragmentAdminInventarioBinding // Auto-Generador de IDs XML de Android ViewBinding
import com.tuempresa.rentaapp.models.FurnitureItem // Elemento simple a leer bd mobiliario
import java.util.UUID // Herramienta para generar Identificadores Únicos Universales imborrables

class AdminInventarioFragment : Fragment() { // Clase controladora del listado de muebles

    private var _binding: FragmentAdminInventarioBinding? = null // Instancia privada nullable por seguridad de ciclo de vida
    // Evitamos el crash si viewBinding falla, aunque en onCreate validaremos su inflado. // (Comentario original preexistente)
    private val binding get() = _binding!! // Getter forzoso confiado para no usar el símbolo de interrogación en cada uso

    private val db = FirebaseFirestore.getInstance() // Inicializar la única instancia singular de la BD remota
    private lateinit var adapter: AdminProductoAdapter // Declaración del Adaptador "Será inicializado después" (lateinit)
    private var listaMobiliario = mutableListOf<FurnitureItem>() // Instancia del Array local mutable y manipulable

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View { // Ciclo vida 1
        _binding = FragmentAdminInventarioBinding.inflate(inflater, container, false) // Acopla XML a este objeto lógico Kotlin
        return binding.root // Pinta root master en pantalla teléfono
    } // Final carga UI UI

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // Ciclo 2, elementos gráficos asegurados y dibujados en cel
        super.onViewCreated(view, savedInstanceState) // Manda a llamar funcionalidad padre core Android SO

        adapter = AdminProductoAdapter( // Ahora si instancía en RAM e inyecta comportamiento
            productos = listaMobiliario, // Enlace de datos inicial vacío
            onEditClick = { producto -> mostrarDialogoProducto(producto) }, // Enlazar el toque corto para editar formulario
            onDeleteClick = { producto -> confirmarEliminacion(producto) } // Enlazar icono de basura
        ) // Instancia lista

        binding.rvAdminProductos.layoutManager = LinearLayoutManager(context) // Decide que la lista escrolea verticalmente recta normal
        binding.rvAdminProductos.adapter = adapter // Acopla el adaptador a la vista para que empiecen a sincronizarse

        binding.fabAgregarProducto.setOnClickListener { // Escucha el Floarting Action Botón en la esquina (FAB)
            mostrarDialogoProducto(null) // Carga popup genérico mandándole NULO para indicarle que es CREACIÓN nueva CERO
        } // Fin click listener FAB

        cargarInventario() // Trigger inicial lógico base de arranque auto-descarga DB datos
    } // Fin ciclo View Created

    private fun cargarInventario() { // Definición descarga red internet
        db.collection("mobiliario").addSnapshotListener { snapshot, e -> // Conecta puente y SE QUEDA ESCUCHANDO PARA SIEMPRE EN VIVO
            if (e != null) { // Si arroja un error Firebase o Internet caido
                Toast.makeText(context, "Error al cargar catálogo", Toast.LENGTH_SHORT).show() // Imprime banner de fallo genérico local
                return@addSnapshotListener // Aborta lectura de este frame iterativo
            } // Fin validación error 

            if (snapshot != null) { // Si hay Data útil traída sin error nulo
                listaMobiliario.clear() // Vacía arreglo por completo primero
                for (doc in snapshot.documents) { // Bucle de cada documento devuelto por la foto/snapshot de red
                    val item = doc.toObject(FurnitureItem::class.java) // Automagicamente mapea JSON a nuestro Molde Mobiliario Kotlin puro
                    if (item != null) { // Previene Null Pointers
                        listaMobiliario.add(item) // Inyecta cada fila encontrada mapeada
                    } // Fin safety
                } // Fin iterador de Documentos
                adapter.actualizarLista(listaMobiliario) // Refleja cambios repintando RecyclerView Android view framework
            } // Fin snapshot safety
        } // Cierra listener infinito Firebase
    } // Fin red method

    private fun mostrarDialogoProducto(productoExistente: FurnitureItem?) { // Controlador creador/editor de Layout Popup genérico
        val dialogView = LayoutInflater.from(context).inflate(R.layout.dialog_admin_producto, null) // Inicia y arma gráfica el recuadro XML de edicion modal 
        
        val tvTitulo = dialogView.findViewById<TextView>(R.id.tvDialogTitulo) // Busca Titulo del modal
        val etNombre = dialogView.findViewById<EditText>(R.id.etDialogNombre) // Busca recuadro texto nombre escribible
        val etDesc = dialogView.findViewById<EditText>(R.id.etDialogDesc) // Busca campo area largo
        val etPrecio = dialogView.findViewById<EditText>(R.id.etDialogPrecio) // Busca bloque numérico precio
        val etStock = dialogView.findViewById<EditText>(R.id.etDialogStock) // Busca bloque cantidad decimal stock
        val btnCancelar = dialogView.findViewById<Button>(R.id.btnDialogCancelar) // Boton regresar / abortar popup
        val btnGuardar = dialogView.findViewById<Button>(R.id.btnDialogGuardar) // Boton publicar edicion o nuevo objeto DB

        if (productoExistente != null) { // Logica Evaluatoria: si ME PASASTE ALGO VÁLIDO entonces ES MODO EDICIÓN
            tvTitulo.text = "Editar Producto" // Cambia Título Hard codeado a contextual Editar
            etNombre.setText(productoExistente.nombreProducto) // Prellena campo 1 nombre
            etDesc.setText(productoExistente.descripcion) // Prellena campo 2 descipcion
            etPrecio.setText(productoExistente.precio.toString()) // Prellena precio convirtiéndolo a string texto para UI
            etStock.setText(productoExistente.totalStock.toString()) // Prellena y muestra inventario máximo que se adquirió bruto 
        } else { // EN CAMBIO SI FUÉ UN NULO EL MANDADO POR EL BOTÓN FLOTANTE...
            tvTitulo.text = "Agregar Producto" // Pinta que es MODO CREACIÓN desde ceros blanco
        } // Fin if mode switch

        val dialog = AlertDialog.Builder(requireContext()) // Inicia contrucción de constructor popups Android System 
            .setView(dialogView) // Le indica que inyecte EL CUSTOM XML que acabamos de leer
            .setCancelable(false) // Fuerza a usuario a darle Salir manual, no dejándolo salirse picando la sombra oscura celular
            .create() // Compila la vista Popup
        
        btnCancelar.setOnClickListener { dialog.dismiss() } // Acciona el boton salir quemando la memoria del Popup y ocultándolo graphicamente
        
        btnGuardar.setOnClickListener { // Engancha el Submit
            val name = etNombre.text.toString().trim() // Extrae y esteriliza string de nombre ingresado
            val desc = etDesc.text.toString().trim() // Esteriliza campo 2
            val priceStr = etPrecio.text.toString().trim() // Extrae en texto raw campo 3 
            val stockStr = etStock.text.toString().trim() // Esteriliza raw num texto 4
        
            if (name.isEmpty() || desc.isEmpty() || priceStr.isEmpty() || stockStr.isEmpty()) { // Validación defensiva formulario completo
                Toast.makeText(context, "Completa todos los campos", Toast.LENGTH_SHORT).show() // Rebotar usuario 
                return@setOnClickListener // No continuar con guardado a fuego
            } // end validation
        
            val price = priceStr.toDoubleOrNull() ?: 0.0 // Mapea seguro y asigna base 0 float como fallback preventiv
            val totalStock = stockStr.toIntOrNull() ?: 0 // Valida casteo y fallback
        
            val id = productoExistente?.id ?: UUID.randomUUID().toString() // Genera ID monstruo si era nulo, de lo recicla id anterior base 
            
            // Si es nuevo, available == total. Si se edita, calculamos la diferencia. // Comentario preexistente explicativo core logic
            val availableStock = if (productoExistente != null) { // Logica complicada de correción contable 
                val diferencia = totalStock - productoExistente.totalStock // Cuánto se le acaba de aumentar (ej: compramos 10 cajas m{as)
                productoExistente.existencia + diferencia // A la variable dinamica RESTANTE real se le empujan mágicamente esas 10 cajas disponibles extras
            } else { // Si es un item 100% virgen...
                totalStock // Su existencia física actual real, será obviamente su máximo bruto pues nadie aún lo rentó
            } // Fin calculo numérico
        
            val nuevoProducto = FurnitureItem( // Compila un nuevo Molde con to-do procesado antes
                id = id, // Mete id calculado (UUID vs reciclado)
                nombreProducto = name,  // Mete Form value validado y sanitizado   
                descripcion = desc, // Met form desc value
                precio = price, // ... price ..
                totalStock = totalStock, // .. gross_stck ...
                existencia = availableStock, // ... current_logical_stocl ...
                imageUrl = productoExistente?.imageUrl ?: "" // Conservar antigua imagen ligada Storage o dejar string quemado vacío predef
            ) // Acaba construcción Objeto Kotlin
        
            guardarEnFirestore(nuevoProducto) // Dispara escritura hacia la nube de Google
            dialog.dismiss() // Quita y destruye Modal flotante de enfrente del usuario
        } // end form submit lambda
        
        dialog.show() // Último paso: Enseña (Render) real visual del widget creado lineas atrás
    } // Fín creador dialog UI

    private fun guardarEnFirestore(producto: FurnitureItem) { // Disparador red puro
        db.collection("mobiliario").document(producto.id).set(producto) // Escribe MERGE/OVERWRITE completo de toda la entidad a la llave primaria
            .addOnSuccessListener { // Si internet y permisos van bien: 
                Toast.makeText(context, "Producto guardado", Toast.LENGTH_SHORT).show() // Avisa bien al Admin
            } // fin sucees
            .addOnFailureListener { // Si DB tiró la FirebaseException Rule violation o Timeout sin Wifi:
                Toast.makeText(context, "Error al guardar", Toast.LENGTH_SHORT).show() // Alerta error general
            } // fi fail callback
    } // Fin funcion pura network

    private fun confirmarEliminacion(producto: FurnitureItem) { // Creado de modal alerta Peligro purgar artículo 
        AlertDialog.Builder(requireContext()) // Abre Popup basico default android
            .setTitle("Eliminar Producto") // Titulo
            .setMessage("¿Estás seguro de que deseas eliminar '${producto.nombreProducto}' del catálogo?") // Template de warning name format
            .setPositiveButton("Eliminar") { _, _ -> // Si pulsas ELIMINAR...
                db.collection("mobiliario").document(producto.id).delete() // Extermina todo el Documento de la colección NoSQL de forma inminente
                    .addOnSuccessListener { // Espera respuesta del Servido GCloud y dice...
                        Toast.makeText(context, "Producto eliminado", Toast.LENGTH_SHORT).show() // Canta fin Exterminio
                    } // Cierra promise de borrar
            } // Fina set pos ui botton alert 
            .setNegativeButton("Cancelar", null) // Pulsar cancelar arrojará Nulo o sea: haré NADA de evento.
            .show() // Renderiza este Alerta Purgar
    } // Fin logica purgar item de la tabla NoSQL Fireatore
	
    override fun onDestroyView() { // Destructor de ciclo de vida visual Android memoria RAM
        super.onDestroyView() // Hereda destrucción base
        _binding = null // Limpia e imposibilita Punteros Huérfano de memoria (Memory Leaks en Kotlin / Anddroid View Binding Framework)
    } // Over. And Out. 
} // Fragmento general Fin de clase base Logica
```
                        Toast.makeText(context, "Producto eliminado", Toast.LENGTH_SHORT).show()
                    }
            }
            .setNegativeButton("Cancelar", null)
            .show()
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}

```

---

<a id='javacomtuempresarentaappuiadminAdminMainActivitykt'></a>
### Archivo: `java/com/tuempresa/rentaapp/ui/ad```kotlin
package com.tuempresa.rentaapp.ui.admin // Empaqueta la lógica raíz de enrutamiento Master del Dueño Local

import com.tuempresa.rentaapp.R // Import core de recursos
import com.tuempresa.rentaapp.ui.common.PerfilFragment // Carga tabulador del perfil compartido a cliente/admin
import com.tuempresa.rentaapp.utils.NotificationHelper // Importa el controlador genérico de mensajes Push y alertas celular

import android.os.Bundle // Objeto bundle para estado base actividad
import androidx.appcompat.app.AppCompatActivity // Extensión core para dar título base Action Bar y compatibilidad SO
import com.google.android.material.bottomnavigation.BottomNavigationView // Importa UI Material Design base Footer Tab Bar menu
import com.google.firebase.auth.FirebaseAuth // Trae lógica validaciones Sesión Login Token (Auth)
import com.google.firebase.firestore.FirebaseFirestore // Traer Cloud Base logic
import com.google.firebase.firestore.ListenerRegistration // Importa manejador de conexión persistente web socket
import com.tuempresa.rentaapp.databinding.ActivityAdminMainBinding // Carga inflador auto-generado principal xml contenedor general

class AdminMainActivity : AppCompatActivity() { // Define la Base General Activity Única global de todo administrador

    private lateinit var binding: ActivityAdminMainBinding // Inyecta vista general Layout Frame principal (Variable base UI)

    private val db = FirebaseFirestore.getInstance() // Obtiene un hilo hacia Firestore (BBDD Principal JSON Múltiple)
    private val auth = FirebaseAuth.getInstance() // Sostiene hilo de JWT (Firebase Web Tokens User Auth)
    private var notifListener: ListenerRegistration? = null // Puntero al escucha de notificaciones para poder apagarlo de RAM oportunamente

    override fun onCreate(savedInstanceState: Bundle?) { // Punto Cero, nacimiento master App Admin
        super.onCreate(savedInstanceState) // Init SO super context
        binding = ActivityAdminMainBinding.inflate(layoutInflater) // Render del XML cascarón general de toda la aplicación web 
        setContentView(binding.root) // Asignarlo directamente a la pantalla master teléfono

        runMigration() // Dispara el script de arreglos viejos a base de BD nueva (Corrige nombres ID erróneos v1 heredados)

        NotificationHelper.createChannel(this) // Abre a fuerza un canal de comunicaciones local Push Notification para SO Android > 8.0 Oreo

        // Cargar fragment inicial // Comentario org.
        if (savedInstanceState == null) { // Valida si es la primera vez en la vida crasheo que se lanza esto
            supportFragmentManager.beginTransaction() // Habla con manejador sub pantallas transiciones 
                .replace(R.id.contenedor_fragmentos, AdminInventarioFragment()) // Incrusta de manera visual inicial Inventario Catalog Admin a fuerza central
                .commit() // Graba los cambios asíncronos en cache layout manager master frame
        } // ends condicional sub fragments

        binding.bottomNavigation.setOnItemSelectedListener { item -> // Listener principal menú abajito tab bars master
            val fragment = when (item.itemId) { // Switch/When que detecta CUAL icono tocaste
                R.id.nav_admin_inventario -> AdminInventarioFragment() // Botón 1 navega y carga Instancia RAM inventario modal
                R.id.nav_admin_pedidos -> AdminPedidosFragment() // Tab 2 Pestaña carga visor Pedidos
                R.id.nav_notificaciones -> com.tuempresa.rentaapp.ui.common.NotificacionesFragment() // Tab 3 Inbox Push Notifications
                R.id.nav_perfil -> PerfilFragment() // Tab final Personal Profile Config general
                else -> null // Condicion null safety 
            } // ends Menu swiching core
            fragment?.let { // Si existió un Fragment Válido seleccionado real (Null safety checks Kotlin) ...
                supportFragmentManager.beginTransaction() // Llama maquina de renderizar Vistas secundarias sub master ..
                    .replace(R.id.contenedor_fragmentos, it) // Y tira la aguja reemplazando lo que existiera en blanco antes UI Master Frame con It!
                    .commit() // Commita el Action view a UI Thread Android 
            } // Fin sub lambda Let call
            true // True de que sí se completó a la perfección y puede encender un colorcito el icono BottomNav Selected state 
        } // Fin Menu Listener

        // Escuchar notificaciones de Firestore dirigidas al rol ADMINISTRADOR // Original developer comment.
        escucharNotificaciones() // Llamar trigger background thread network task permanente a BD Firebase
    } // End OnCreated Master 

    private fun escucharNotificaciones() { // Construye query base reactiva web socket
        notifListener = db.collection("notificaciones") // Navega a Nube -> Colección Principal 'notificaciones' -> Documentos Globales 
            .whereEqualTo("paraRol", "ADMINISTRADOR") // Filtrado Nube, transefiere menos Bytes a celular...  Solo las Taggeadas para DIOS
            .whereEqualTo("leido", false) // Filtro para solo escupir aquellas nuevas virginales No clickeadas false flag = Unread messages
            .addSnapshotListener { snapshot, e -> // Deja puerta abierta "Para Siempre" Escuchando push changes Firebase 
                if (e != null || snapshot == null) return@addSnapshotListener // Si se apaga internet abortar error log
                for (doc in snapshot.documents) { // Por cada Noti recibida por el Pipe-Net
                    val titulo = doc.getString("titulo") ?: "Notificación" // Pilla Titulo texto, Si vacio pilla string Notificacion basica def.
                    val cuerpo = doc.getString("cuerpo") ?: "" // Pilla Body raw...
                    NotificationHelper.mostrar(this, titulo, cuerpo) // Grita y activa la vibracion Sistema Operativo Hardware real PUSH ALERT BANNER a cara de ADMIN User
                    // Marcar como leído para no volver a mostrarlo // Code Dev comment ...
                    doc.reference.update("leido", true) // Impacta al reves de update, mandando Flag True (Leida ya y dibujada) así nunca mas se trae en el Query arriba de false Unread.
                } // Ends loops de alerts Push recibidas simultaneas batch limit 
            } // Ends Lambda Socket listen
    } // End Función Notis Network background 

    override fun onDestroy() { // En caso de que se quiebre el Dueño y cierre APP forzosamente Android Settings o Multitask Task killers 
        super.onDestroy() // Trigger core destruct 
        notifListener?.remove() // APAGA socket web para NO ROBAR Batería Data en segundo plano Fantasma Bug = Memory Leak Network Socket preventivo 
    } // Ends onDestroy Core override Master OS 

    private fun runMigration() { // Corrector legacy de Nombres versión 2 de App (Parchea la base antigua si existen datos viejos mal armados previos al Commit XYZ)
        val prefs = getSharedPreferences("app_prefs", android.content.Context.MODE_PRIVATE) // Usando SharedPreferences estáticos XML del equipo particular del teléfono (No BD nube)
        if (prefs.getBoolean("migration_notif_nombres_v2", false)) return // Validamos: "Ya la corrí ayer?, Sisi, vete de aquí (return) early abortation".
		// End check flags logic 
        db.collection("mobiliario").get().addOnSuccessListener { mobSnap -> // Inicia Promise Descarga Total y bruta del catálogo en RAM...
            val nombres = mutableMapOf<String, String>() // Crea mapa hashmap ID -> String Local
            for (doc in mobSnap.documents) { // Itera toda de golpe todo el Catalogo en red Nube
                nombres[doc.id] = doc.getString("nombreProducto") ?: "" // Transforma a Llave ID real = Valor String Título bonito real... 
            } // fin asign
			// Fin llenado cache catalog dict var
			
            db.collection("rentas").get().addOnSuccessListener { rentasSnap -> // Promise anidado GIGANTE: Pilla Todas las órdenes historicas del universo 
                val orderNames = mutableMapOf<String, String>() // Crea nuevo hashmap global ID Oreden Renta -> Nombres pegados String gigante
                for (doc in rentasSnap.documents) { // Bucle loop for historico doc order...  (PELIGRO DE OOM NUBE GIGANTE si son 100 mil)
                    val pedido = doc.toObject(com.tuempresa.rentaapp.models.RentalOrder::class.java) ?: continue // Intenta convertir Doc JSON DB a Clase limpia o salta It. Null loop 
					// Logica principal de parcheo...
                    var changed = false // Bandera simple 
                    val newItems = pedido.items.map { item -> // Itera cesta y Re-mapea Cart 
                        if (item.furnitureName.isEmpty() && nombres.containsKey(item.furnitureId)) { // Si El Articulo nombre venia vacío, y de casualidad lo cachamos del Catálogo DB principal...
                            changed = true // Alza bandera TRUE hubo un parcheado real de Info corrupta antigua. 
                            item.copy(furnitureName = nombres[item.furnitureId]!!) // Falsa y Parchea Copiando Nombre nuevo desde el Diccionario mapeado en linea 50 a Cart particular 
                        } else item // Si ya estaba sano, avienta el mismo Molde viejo normal in-mutado.
                    } // Fin iteracion
                    if (changed) { // Validando si Al menos 1 objeto de Cesta Cart Items venia hueco o corrupto en el NOmbre viejo y alzó la flag 
                        db.collection("rentas").document(doc.id).update("items", newItems) // SOBREESCRIBE A LA Nube a fuego toda la Cesta Re-Escrita Array nueva lista ya saneada.
                    } // end condition update network
					// Prosiguiendo logica notis 
                    var prodNames = "" // Init string vacío 
                    newItems.forEach { item -> // Pilla cada pieza de las cestas 
                        val n = item.furnitureName.ifEmpty { "Articulo" } // fallback logico error
                        prodNames += "${item.quantity}x $n, " // Sube y enlaza Strings pegaditos Ej: "4x Silla, 2x Manteles, ... "
                    } // forech loop ended 
                    prodNames = prodNames.removeSuffix(", ") // Quita la fea coma basura sobrante por culpa del string interpolation y el loop del último.
                    val shortId = doc.id.take(6).uppercase() // Reduce el UID Largo Firebase Hexadecimal UUID horrendo a solo "AB123C" cortito
                    orderNames[shortId] = prodNames // Parchea Mapa Diccionario General ID CORTITO ORDEN  --> "2x SILLAS, Y MESAS ETC STRING GENERAL" (A usar más adelante abajo en Notis.)
                } // Fin For loop orders history general

                db.collection("notificaciones").get().addOnSuccessListener { notifSnap -> // Promise nivel Dios 3 Anidado Infierno Carga Push notifics en string ram ..
                    for (doc in notifSnap.documents) { // Cicla toda las notis
                        var cuerpo = doc.getString("cuerpo") ?: "" // Coge body texto
                        var changed = false // Asigna flag inalterada
						// Logica regex Notis 
                        val regex = Regex("#([a-zA-Z0-9]{6})") // Escanea buscando los Tags hashtags seguidos de 6 dígitos que era como salía en Version VIEJITA ANTES. 
                        val match = regex.find(cuerpo) // Empareja regex patetrn macher con Cuerpo entero String Stringer Noti  
                        if (match != null) { // Valida existió
                            val shortId = match.groupValues[1].uppercase() // Extre la letra/num cortada upper de array de matches regexp  
                            if (orderNames.containsKey(shortId)) { // Si da la puta casualidad que ese ID en texto sí esta en las orders globales parseadas en el dict de arriba...
                                cuerpo = cuerpo.replace(match.value, "(${orderNames[shortId]})") // Destruye y suplanta el texto #F81D92 Horrible de antes en DB POR Literalmente un " ( 2x sillas y MESA )" 
                                changed = true // Enciende la banderilla Patch Flag de este body String  
                            } // End condicion sub cond. 
                        } // End mach eval

                        if (changed) { // Evaluamos: hubo Parche en Este texto JSON DB?
                            db.collection("notificaciones").document(doc.id).update("cuerpo", cuerpo) // Pues Mandalo de vuelta por Interenet actualizando solo Field text Cuerpecito Notis 
                        } // Fini
                    } // for de notifs close 
                    
                    prefs.edit().putBoolean("migration_notif_nombres_v2", true).apply() // Ultimo Paso Vital... ESCRIBE EN MEMORIA CELULAR DISCO VERDADERO XML PREF QUE YA TERMINASTE ESTA JODIDA MIGRACIÓN DE BD 
                } // End Promise notifys
            } // End Promise orders history
        } // End Promise mobiliarios fetch
    } // End FUN Migradora De Nombres BD Viejos Parches 
} // Cierre clase Android Activity App Admin MASTER Dueño Dueña 
```d) {
                            db.collection("notificaciones").document(doc.id).update("cuerpo", cuerpo)
                        }
                    }
                    
                    prefs.edit().putBoolean("migration_notif_nombres_v2", true).apply()
                }
            }
        }
    }
}

```

---

```kotlin
package com.tuempresa.rentaapp.ui.admin // Paquete contenedor del panel de control pedidos admin

import com.tuempresa.rentaapp.R // Importador local de recursos
import com.tuempresa.rentaapp.adapters.PedidoAdapter // Trae el Renderizador de celdas para Órdenes listas 

import android.app.AlertDialog // Creador de recuadros interactivos modales emergentes
import android.os.Bundle // Transmisor de estados de Activity en Activity
import android.view.LayoutInflater // Conversor a View gráfica
import android.view.View // Componente UI Android base
import android.view.ViewGroup // Contenedor layout padre
import android.widget.Toast // Popup corto flotante nativo
import androidx.fragment.app.Fragment // Clase núcleo de vistas reutilizables fragmentarias
import androidx.recyclerview.widget.LinearLayoutManager // Director de escrolado de listas 
import com.google.firebase.firestore.FirebaseFirestore // Librería Core Red DB
import com.tuempresa.rentaapp.databinding.FragmentAdminPedidosBinding // Binder de Views automático sin findViewByID aburridos
import com.tuempresa.rentaapp.models.OrderStatus // Trae el enum estricto de Estatus de pedidos
import com.tuempresa.rentaapp.models.RentalOrder // Molde del Pedido Grande Base
import com.tuempresa.rentaapp.utils.NotificationHelper // Helper Inyector de Push Notifications cel.

class AdminPedidosFragment : Fragment() { // Clase controlador logic AdminPedidos

    private var _binding: FragmentAdminPedidosBinding? = null // Var nula memoria inicial Binder
    private val binding get() = _binding!! // Getter confiado no nulo

    private val db = FirebaseFirestore.getInstance() // SingleTon de conexión base datos
    private lateinit var adapter: PedidoAdapter // Puntero al Adapter visual
    private var listaPedidos = mutableListOf<RentalOrder>() // Lista Filtrada y mostrada en Pantalla (ACTIVOS O CERRADOS)
    private var allPedidos = mutableListOf<RentalOrder>() // Lista OCULTA cache gigante de TODO lo que se bajó histórico de la WEB sin filtro  
    private var nombresMobiliarioCache = mutableMapOf<String, String>() // Diccionario Mapeo ID->Nombre RAM para agilizar busquedas visuales sin recargar la DB
    private var mostrarHistorial = false // Bandera de la TAB Seleccionada arriba en pantalla (Activos vs Pasados) false default actv 

    override fun onCreateView( // Inicialización de UI pura 
        inflater: LayoutInflater, container: ViewGroup?, // Trae entorno 
        savedInstanceState: Bundle? // Trae estado 
    ): View { // Returnea la VIEW construida 
        _binding = FragmentAdminPedidosBinding.inflate(inflater, container, false) // Infla XML y lo acopla aquí a variables
        return binding.root // Dibuja la pantalla 
    } // acaba init UI 

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // Init Post UI lógica en sí
        super.onViewCreated(view, savedInstanceState) // Inicializador Padre Android fragment core override base 

        adapter = PedidoAdapter( // Instancia Renderizador Visual Creado x Devs  
            pedidos = listaPedidos, // Inyecta Refernecia de memoria List vacia inicial
            esAdmin = true, // MUY IMPORTANTE, AVISA AL ADAPTER QUE PRENDA SUS BOTONES PROPIOS DE DUEÑO  
            onEstadoCambiado = { pedido, nuevoEstado -> // Lambda Listener desde la celda chiquita nos Avienta el nuevo Estatus dictado ...
                if (nuevoEstado == OrderStatus.APPROVED) { // Si el vato de la Tienda Dueño le dió al boton "Aprobar"
                    actualizarEstadoPedido(pedido, nuevoEstado) // Función Segura y rápida que no requiere confirmación Popup
                } else { // Sin Embargo... Si el Vato Dueño picó RETORNAR RENTA o PEOR "CANCELAR"...
                    confirmarCambioEstado(pedido, nuevoEstado) // Función que levanta un POPUP Alerta Grave de ¿Segurísimo bro?
                } // ends logic checks actions
            }, // acaba lambda 1  
            onAdminEliminar = { pedido -> // Lambda de Purgar Permanentemente Historico de DB 
                confirmarEliminarRegistro(pedido) // Levanta Modal Preguntado si esta Loco el admin pues borrará plata historica
            } // acaba lmbd destructor 
        ) // Fín inyección Params.

        binding.rvAdminPedidos.layoutManager = LinearLayoutManager(context) // Agrega Scroller vertical al View Recycler del XMl 
        binding.rvAdminPedidos.adapter = adapter // Fusiona Adapter Kotlin Logic con Componente Layout Android nativo View.  

        binding.toggleGroupAdminPedidos.addOnButtonCheckedListener { _, checkedId, isChecked -> // Engancha el Segmented Control superior (Botones Pegaditos Activos / Historial) 
            if (isChecked) { // Si Detecta que acaban de Seleccionar una de las 2 mitades 
                mostrarHistorial = checkedId == R.id.btnAdminHistorial // Bool evalúa ID true si es el boton derecho, false al izquierdo, settea flag General 
                actualizarListaFiltrada() // Acción desencadenadora visual, repinta el RV basado a la flag seteada
            } // Cond logic event tab group 
        } // Fin Event Listeners 

        cargarNombresMobiliario { // Llama Descarga Asyncrona de Diccionaro de Nombres ...
            cargarTodosLosPedidos() // ... y CUANDO TERMINES la promesa interna (CALLBACK)... Traete Todo el desmadre BD histórico. 
        } // Fin Trigger asincrono encadenado 
    } // Fin evento UI Creada 

    private fun cargarNombresMobiliario(onComplete: () -> Unit) { // Peticio BBDD para cachear nombres de IDs y no gastar 100 mil lecturas despues
        db.collection("mobiliario").get().addOnSuccessListener { snapshot -> // Llama NUBE Catalogos Snapshot
            for (doc in snapshot.documents) { // Mete Cada mueble...
                val nombre = doc.getString("nombreProducto") ?: "" // Saca variable bonita "Sillas Rojas"
                nombresMobiliarioCache[doc.id] = nombre // Parchea el Hash Map cache en RAM Dict["12e34id"] = "Sillas Rojas 2"
            } // Acabó el loop gigante 
            onComplete() // Dispara la función lambda misteriosa inyectada (La de "Ahora si carga órdenes please")
        }.addOnFailureListener { // fallback internet off / error db rules Firebase 
            onComplete() // de cualquier modo Sigue la vida, fallback a Nombres vacíos 
        } // Fin promesa BBDD simple nombres 
    } // Fun End.

    private fun cargarTodosLosPedidos() { // Metodo Red Gigante BBDD Ordenes All time 
        db.collection("rentas") // Selekt Table Firebase "rentas"
            .addSnapshotListener { snapshot, e -> // Deja Cable Abierto Forever ...  (Live Update) 
                if (e != null) { // Fallback err net  
                    Toast.makeText(context, "Error cargando pedidos", Toast.LENGTH_SHORT).show() // Feedback mal 
                    return@addSnapshotListener // Salir  
                } // Err handl 
                if (snapshot != null) { // Valida Datos existnetes nulos safety  
                    allPedidos.clear() // Vacía la matriz interna cache gigante Historica master antes de rellenar 
                    for (doc in snapshot.documents) { // Loop Master Docs de snapshot Ggl Cloud ... 
                        val pedidoOriginal = doc.toObject(RentalOrder::class.java) // Transforma JSON puro Nativo DB a Clase Magica Kotlin RentalODer.  
                        if (pedidoOriginal != null) { // Puerco safety dev check ..  
                            val itemsActualizados = pedidoOriginal.items.map { item -> // Itera los muebles dentro y RE MAPEA LA LISTA (Para parchear vacios)
                                if (item.furnitureName.isEmpty() && nombresMobiliarioCache.containsKey(item.furnitureId)) { // Si No tiene titulo en la BD pero sí en la RAM Cache Dict 
                                    item.copy(furnitureName = nombresMobiliarioCache[item.furnitureId]!!) // Falsa y Parchea copiando string correcto  al Mueble Item 
                                } else { // Si esta guapo el titulo original...
                                    item // Se Calla y pasa el mismo wey inmutado 
                                } // end if in line functional map  
                            } // End maper logic items 
                            val pedido = pedidoOriginal.copy(items = itemsActualizados) // Sustituye el Field items List del Cart, creando un nuevo puntero  Clon Inmutable memory 
                            allPedidos.add(pedido) // Inyecta el PEDIDO final ya con items preciosos nombrados, en la Cache maestra de RAM app 
                        } // end if validacion Nula mapper 
                    } // end For Loop Network Snapshot Iter 
                    actualizarListaFiltrada() // Disparador visual: Ey Adapter We, ya cambió tu mamá y traigo datos, recalcula qué enseñar.  
                } // End IF Shot
            } // Fin Closure Listen  
    } // End Fn carga  

    private fun actualizarListaFiltrada() { // Splitter Filter UI render Array List builder 
        listaPedidos.clear() // Borra la pequeña pantalla de matriz visual que verá user
        for (pedido in allPedidos) { // LOOP MASTER GIGANTE LA RAM interna  
            val esFinalizado = pedido.status == OrderStatus.RETURNED || pedido.status == OrderStatus.CANCELLED // Variable bool checkea status enum 
            if (mostrarHistorial == esFinalizado) { // Condicional Inteligente:  Si Flag UI MostrarPasados Es igual a True Finalizado (Pasa) o False MostrarActivos es Igual a False Creados  (PASA). MAGIA XOR LOGIC.  
                listaPedidos.add(pedido) // Mete al carrusel visible  
            } // end  
        } // fin if xor 
        listaPedidos.sortByDescending { it.deliveryDate } // Ordena la mini matriz por Milisegundos de Antiguedad Descendente  
        adapter.actualizarLista(listaPedidos) // Golpea al Adapter y le manda la mini matriz fresquesita visual 
    } // Func end list filter order 

    private fun confirmarCambioEstado(pedido: RentalOrder, nuevoEstado: OrderStatus) { // Popuper Action Admin  
        val accion = if (nuevoEstado == OrderStatus.RETURNED) "Marcar como DEVUELTO" else "CANCELAR pedido" // Ternario if en var string accion 
        AlertDialog.Builder(requireContext()) // Inicia Builder Modal Alertas nativas  
            .setTitle(accion) // Setter título  
            .setMessage("¿Estás seguro que deseas $accion #${pedido.id.take(6).uppercase()}?\n\nEsto regresará los artículos al stock disponible.") // Seteo warning y concatenacion sub strings warning   
            .setPositiveButton("Sí, proceder") { _, _ -> // Clic ok modal action 
                procesarDevolucionStock(pedido, nuevoEstado) // Llamada Real A backend BD BDD   
            } // fin call func 
            .setNegativeButton("Cerrar", null) // Abortar operacion   
            .show() // Renderiza  
    } // End confirm action   

    private fun confirmarEliminarRegistro(pedido: RentalOrder) { // Action Pop delete admin   
        AlertDialog.Builder(requireContext()) // init  
            .setTitle("Eliminar Registro") // title delete   
            .setMessage("¿Estás seguro que deseas ELIMINAR PERMANENTEMENTE el pedido #${pedido.id.take(6).uppercase()} de la base de datos?\nEsta acción no se puede deshacer.") // Body alerta danger 
            .setPositiveButton("Sí, eliminar") { _, _ -> // Bton de purge 
                eliminarRegistroPedido(pedido) // Exterminio Backend call   
            } // click listen pos btn   
            .setNegativeButton("Cancelar", null) // aborta y no lanza na 'null 
            .show() // render visual    
    } // fun end elim warning    

    private fun eliminarRegistroPedido(pedido: RentalOrder) { // Creador network purga 
        db.collection("rentas").document(pedido.id) // Query master document by id 
            .delete() // PIDE Y MANDA LA SENTENCIA DEL DELETE (Ojo sin confirmacion y es asincrono retorna un void task promise res) 
            .addOnSuccessListener { // Promise then (Oye gcloud ya lo borró con extio)... 
                Toast.makeText(context, "Registro eliminado exitosamente", Toast.LENGTH_SHORT).show() // Di exito UI   
                // La lista se actualizará automáticamente por el SnapshotListener // Developer commnt 
            } // Promise Sucess lambda  
            .addOnFailureListener { e -> // Falla catastrofe net o auth ...  
                Toast.makeText(context, "Error al eliminar: ${e.message}", Toast.LENGTH_LONG).show() // Print msg log del exception  
            } // error callback ui promiese reject  
    } // End purge backend action 

    private fun procesarDevolucionStock(pedido: RentalOrder, nuevoEstado: OrderStatus) { // Proceso muy Delicado Financiero TRANSACCIÓN ÁCID.  
        // Transacción Firestore: PRIMERO todas las lecturas, LUEGO todas las escrituras // Dev comment   
        db.runTransaction { transaction -> // INICIA BLOQUE TRANSACCIONAL BLOQUEANTE DE TREAD BBDD NETWORK NUBE  (Atomicity) 

            // ── FASE 1: TODAS las lecturas ────────────────────────────────────────── // Comment 
            val snapshots = pedido.items.map { cartItem -> // Mapeo lambda Items en lista a Tuplas de Datos (Pair) 
                val docRef = db.collection("mobiliario").document(cartItem.furnitureId) // Pointer Referencia BBDD doc 
                Pair(cartItem, transaction.get(docRef)) // Inyecta la Parejita: Mi Objeto local Item + EL Tarea promesa del Get Docuemnto NUBE  en cola Bloqueada Transaction GET .   
            } // ends build read operations queue   

            // ── FASE 2: TODAS las escrituras (stock + estado pedido) ─────────────── // comment   
            snapshots.forEach { (cartItem, snapshot) -> // Toma el Snapshot que YA bajó Exitoso Bloqueo arriba...   
                if (snapshot.exists()) { // Pilla si sique existiendo el mueble maldito   
                    val stockActual = snapshot.getLong("existencia") ?: 0 // Toma cantidad 72 sillas 
                    val docRef = db.collection("mobiliario").document(cartItem.furnitureId) // Busca ref a id sillas Muebl 
                    transaction.update(docRef, "existencia", stockActual + cartItem.quantity) // Transaccionalmente (Seguro) Súmale  ( 72 + 5 ) Y reescribe 77 en GCloud Nube 
                } // ends logic rewrite sum    
            } // end foreach all items loops      

            val orderRef = db.collection("rentas").document(pedido.id) // Por último Tarea final... Referenciar el propio papel del pedid  
            transaction.update(orderRef, "status", nuevoEstado.name) // y Acrtualizarlo (SObreESCRIBIR a lo seguro ) con el Nuevo Estado (CANCELLED ENDED RETURNED)   

            null // Retorna Null forzosoy necesario pa la Promise de google   
        }.addOnSuccessListener { // SI TODA ESA MASA MAGMATICA GIGANT ESCRITURA FUE BIEN   
            val estadoTexto = when (nuevoEstado) { // Enum Switch  
                OrderStatus.RETURNED -> "devuelto" // Text a  
                OrderStatus.CANCELLED -> "cancelado" // t b 
                else -> nuevoEstado.name.lowercase() // t default fallback
            } // When ends string asign    

            // Notificación local al admin // Dev cmt
            NotificationHelper.mostrar( // Llama Creador GLocal OS Psuher  
                requireContext(), // Env   
                "✅ Pedido Actualizado", // Title  
                "Pedido #${pedido.id.take(6).uppercase()} marcado como $estadoTexto. Stock recuperado." // Boody  
            ) // Fin notify   

            // Notificación Firestore para el usuario dueño del pedido // dev cmt   
            var productosNombres = "" // init string   
            pedido.items.forEach {  // Irea la ceta 
                val nombre = it.furnitureName.ifEmpty { "Articulo" } // fallback paps  
                productosNombres += "${it.quantity}x $nombre, "  // string concat concat  
            } // lopp foreach list  
            productosNombres = productosNombres.removeSuffix(", ") // chk quita comitas guarras  
            
            enviarNotificacionFirestore( // Invocador Custom Nuble DB Writer Notis para User Final Remoto   
                paraUserId = pedido.userId, // DIle al USER que id fue afectao pa que le salte Push asintota a el y a nadie mas prro   
                titulo = when (nuevoEstado) { // TItulo switch if else    
                    OrderStatus.RETURNED -> " Renta Completada" // caso   
                    OrderStatus.CANCELLED -> " Renta Cancelada" // baso    
                    else -> "🔄 Estado Actualizado" // raso     
                }, // final setter param   
                cuerpo = "Tu pedido ($productosNombres) fue $estadoTexto." // Boody  
            ) // call final    

            Toast.makeText(context, "Estado actualizado y stock recuperado", Toast.LENGTH_SHORT).show() // FEEDBack User admin exitalo visual   
        }.addOnFailureListener { e -> // Si TODO EL BLOQUE GIGANTE ATOMICO FALLÓ UN CENTIOMO... (Se reetrorna todo en automatico) y tira erro catch  
            Toast.makeText(context, "Error al actualizar: ${e.message}", Toast.LENGTH_LONG).show() // Print msg log del exception en UI   
        } // Fin de todo ACID Transc  
    } // func end process stock bd action return  

    private fun actualizarEstadoPedido(pedido: RentalOrder, nuevoEstado: OrderStatus) { // Update simple 1 paso    
        db.collection("rentas").document(pedido.id) // Agara doc db 
            .update("status", nuevoEstado.name) // SObrescribe MUtacion campo status flag con EL nuevo nombree
            .addOnSuccessListener { // Promise resolved ok    
                // Notificación local al admin // Dev 
                NotificationHelper.mostrar( // Show local UI   
                    requireContext(), // cntxt   
                    "✅ Pedido Aprobado", // tit   
                    "Pedido #${pedido.id.take(6).uppercase()} marcado como Aprobado." // strbdody
                ) // show    

                // Notificación Firestore para el usuario // dev 
                var productosNombres = "" // arrrr  
                pedido.items.forEach {  // loop list
                    val nombre = it.furnitureName.ifEmpty { "Articulo" } // fbx nullx safe  
                    productosNombres += "${it.quantity}x $nombre, "  // contcat
                } // lfend
                productosNombres = productosNombres.removeSuffix(", ") // stp shit del loop 

                enviarNotificacionFirestore( // Remotr call to firebase    
                    paraUserId = pedido.userId, // param dest.
                    titulo = " Renta Aprobada", // title set
                    cuerpo = "Tu pedido ($productosNombres) fue aprobado. ¡Te esperamos!" // strbd 
                ) // rem call ok .    

                Toast.makeText(context, "Pedido marcado como Aprobado", Toast.LENGTH_SHORT).show() // feed back success OKI 
            } // fn success ok call  
    } // end func 

    /**
     * Escribe un documento en "notificaciones" en Firestore.
     * El listener en MainActivity lo leerá y mostrará la notif local al usuario.
     */
    private fun enviarNotificacionFirestore( // Creador Notis en Base De Datos JSON Master Central
        paraUserId: String, // String A quien
        titulo: String, // Str title
        cuerpo: String // str bddy 
    ) { // Inicia def func args  
        val notif = hashMapOf( // Estructura Mapa JSON Magica HasMap Nivel bajo Kotlin 
            "paraRol" to null, // Campo Rol a NULL (No me importa el rol global, esto lo dirijo al INDIVIDUI)
            "paraUserId" to paraUserId, // Y el individuo es éste. Match de DB query where id equal 
            "titulo" to titulo, // asigna p title  
            "cuerpo" to cuerpo, // asign boddy  
            "leido" to false, // BAndera unread no vista por default inicio  
            "timestamp" to System.currentTimeMillis() // Inserta hora del reloj master OS en MS linux base epoch 
        ) // Ends Map Obj builder dict  
        db.collection("notificaciones").add(notif) // Avienta la canasta a la DB central y que se asigne Auto generada id al dict.  
    } // Ends  Func Notification builder pusher .  

    override fun onDestroyView() { // Exterminador de Ciclo vida fragmntal 
        super.onDestroyView() // call padre OS framework android 
        _binding = null // Limpio a fuerzas memory Leaks viewbinding frameworker . 
    } // Ends Override Fun .
} // Fin clase AdminPedidos Fragment Maestro
```cal al usuario.
     */
    private fun enviarNotificacionFirestore(
        paraUserId: String,
        titulo: String,
        cuerpo: String
    ) {
        val notif = hashMapOf(
            "paraRol" to null,
            "paraUserId" to paraUserId,
            "titulo" to titulo,
            "cuerpo" to cuerpo,
            "leido" to fa```kotlin
package com.tuempresa.rentaapp.ui.auth // Carpeta auth donde vive la seguridad Login Register Restablecer password

import com.tuempresa.rentaapp.ui.admin.AdminMainActivity // Vinculo la llave a la pantalla de dueños
import com.tuempresa.rentaapp.ui.user.MainActivity // Vinculo la llave a la pantalla de publico normal

import android.content.Intent // Trampolín para saltar de Activity a Activity (Navegación base SO)
import android.os.Bundle // Intercambiador de estados
import android.widget.Toast // Recuadro negrito de alertas texto
import androidx.appcompat.app.AppCompatActivity // Envoltorio master de Android retrocompatible
import com.google.firebase.auth.FirebaseAuth // Motor Firebase Token Generator
import com.tuempresa.rentaapp.databinding.ActivityLoginBinding // Pegamento codigo XML 

class LoginActivity : AppCompatActivity() { // Puerta grande de la casa (iniciación)

    private lateinit var binding: ActivityLoginBinding // Puntero UI views 
    private lateinit var auth: FirebaseAuth // Puntero token engine Firebase Auth

    override fun onCreate(savedInstanceState: Bundle?) { // First step On launch SO method
        super.onCreate(savedInstanceState) // Extiende init base OS activity 
        binding = ActivityLoginBinding.inflate(layoutInflater) // Arma la visual del login y junta a mem.
        setContentView(binding.root) // Imprímelo en Celular 

        auth = FirebaseAuth.getInstance() // Da de alta y extrae la llave general de autenticador global cache cel

        // Si ya hay sesión activa, ir directo al menú y cerrar login // Dev comment 
        if (auth.currentUser != null) { // Valiando si existia una galleta Token cookie de login previo en días pesados local android. 
            irAlMenuPrincipal() // SALTA El logueo tedioso con pass y mételo de frente 
            return // Acaba ejcución onCreate actual Login para no re renderizar
        } // logic if

        binding.btnContinuar.setOnClickListener { // Engancha accion CLICK boton Login 
            val email = binding.etEmail.text.toString().trim() // Tira de la cadenita y extrae texto quitando espacios whitespaces . 
            val password = binding.etPassword.text.toString().trim() // Extrae pass sanitiza whitespaces .  

            if (email.isEmpty() || password.isEmpty()) { // Validation fields missing data.
                Toast.makeText(this, "Ingresa tu correo y contraseña", Toast.LENGTH_SHORT).show() // Feedback bad 
                return@setOnClickListener // Aborta intento red   
            } // fn if 

            iniciarSesion(email, password) // Llama function red externa auth engine .
        } // fin btn login action 

        binding.tvIrAlRegistro.setOnClickListener { // Link de texto chiquito "Eres Nuevo?" 
            startActivity(Intent(this, RegistroActivity::class.java)) // Lanza Intent trampolin navegacion hacia Pantalla Registro   
            finish() // MATA Pantall de login actal para que al darle al Boton Back celular no regrese aqui (Error ux)
        } // logic btn ir register 
    } // On create End  

    private fun iniciarSesion(email: String, password: String) { // Creador network Firebase Login
        auth.signInWithEmailAndPassword(email, password) // Firebase API call, intenta checkear backend User y Pass con salt hash y auth token gen   
            .addOnCompleteListener(this) { task -> // On Promise Finished ... (Bueno o maloo... terminando) : 
                if (task.isSuccessful) { // if Good login 
                    irAlMenuPrincipal() // Vete a la app
                } else { // IF bad Auth fail
                    Toast.makeText(this, "Error: ${task.exception?.message}", Toast.LENGTH_LONG).show() // Print user porqye failió (Pass mal, usr block) 
                } // End Auth Check IF  
            } // Ends Promise Listener  
    } // Ends Func net login builder 

    private fun irAlMenuPrincipal() { // Controlador maestro Logica Ruteo 
        val currentUser = auth.currentUser // Saca datos de la Cookie / Token  
        if (currentUser != null) { // Valida real 
            val db = com.google.firebase.firestore.FirebaseFirestore.getInstance() // Trame el DB Instance JSON para averiguar roles. 
            db.collection("usuarios").document(currentUser.uid).get() // Haz network Peticion Nube GET Tabla "Usuarios" -> "ID UID Google Token" 
                .addOnSuccessListener { document -> // Promise res Get ...  
                    if (document.exists() && document.getString("role") == "ADMINISTRADOR") { // Evalua si El Rol text tag de Nube dicta Nivel DIOS (ADMINISTRADOR)  
                        startActivity(Intent(this, AdminMainActivity::class.java)) // SALTA AL PANEL CHINGON  
                    } else { // PEROO SI TRAE CUALQUIER OTRA COSA o NULO o vacio O Taggeado Cliente ... 
                        startActivity(Intent(this, MainActivity::class.java)) // LOGEALO AL CATALOGO PUBLICO  
                    } // Cierra verificador role logic  
                    finish() // MATA panta de ruteo/Login por ux 
                } // Fn res
                .addOnFailureListener { // If falló red o base de datos no leyo 
                    // Fallback to client if failure // dev fallback fail   
                    startActivity(Intent(this, MainActivity::class.java)) // ASUME ES CLIENTE MUNDANO PARA NO ROMPER APP (Default bas e role mode )
                    finish() // burn views Login and Go.   
                } // Error safe failover   
        } // end valid logic 
    } // End fn Ruter Director   
} // Login Activity Clas MAster Out  
```            .addOnSuccessListener { document ->
                    if (document.exists() && document.getString("role") == "ADMINISTRADOR") {
                        startActivity(Intent(this, AdminMainActivity::class.java))
                    } else {
                        startActivity(Intent(this, MainActivity::class.java))
                    }
                    finish()
                }```kotlin
package com.tuempresa.rentaapp.ui.auth // Directorio lógica Acceso / Registro

import com.tuempresa.rentaapp.ui.admin.AdminMainActivity // App master Dueños
import com.tuempresa.rentaapp.ui.user.MainActivity // App Master Pública

import android.content.Intent // Trampolín de salto Navegación
import android.os.Bundle // State Handler base  
import android.widget.Toast // Recuadritos emergentes feedback text  
import androidx.appcompat.app.AppCompatActivity // Activity super OS  
import com.tuempresa.rentaapp.databinding.ActivityRegistroBinding // Liga XML Design Register XML con Code 
import com.google.firebase.auth.FirebaseAuth // Creador Mágico de Cuentas Engine Firebase  
import com.google.firebase.firestore.FirebaseFirestore // Database Engine JSON Google  
import com.tuempresa.rentaapp.models.Role // Molde Tipo Restringido (Enum Cliente o Dueño)  
import com.tuempresa.rentaapp.models.User // Molde del Perfil que iremos rellenando en el form   

class RegistroActivity : AppCompatActivity() { // Clase Logica Form Registro 

    private lateinit var binding: ActivityRegistroBinding // Inyector UI  
    private lateinit var auth: FirebaseAuth // Inyector Auth Net   
    private val db = FirebaseFirestore.getInstance() // Genera pipe BBDD    

    override fun onCreate(savedInstanceState: Bundle?) { // Launch View  
        super.onCreate(savedInstanceState) // Init SO    
        binding = ActivityRegistroBinding.inflate(layoutInflater) // Arma XML    
        setContentView(binding.root) // Render UI  

        auth = FirebaseAuth.getInstance() // Abre Instancia Google Api  

        // Si ya hay un usuario logueado, ir directo // dev  
        if (auth.currentUser != null) { // Valida Coki  
            irAlMenuPrincipal() // Vete app Master Rounter  
            return // aborta iniiciador     
        } // fi  

        binding.btnRegistrar.setOnClickListener { // Escucha boton Confirmar cuenta GIGANTE   
            val nombre = binding.etNombre.text.toString().trim() // Tira de form inputs  
            val telefono = binding.etTelefono.text.toString().trim() // Limpia    
            val email = binding.etEmail.text.toString().trim() // Sanitisza  
            val password = binding.etPassword.text.toString().trim() // Recoge Pass   
            val esAdmin = binding.switchAdminRole.isChecked // Variable BOooleana Extrae Estado Actual Toggle (Prendidado o Apadago?) Switch UI admin mode    

            if (nombre.isEmpty() || telefono.length < 10 || email.isEmpty() || password.length < 6) { // Validaciones fuertes de UX. Pass max 6 , Tel Max 10. NO empty .   
                Toast.makeText(this, "Por favor completa todos los campos correctamente", Toast.LENGTH_SHORT).show() // Feedback rojo fail 
                return@setOnClickListener // Aborta lambda   
            } // fdns  

            registrarUsuarioEnFirebase(nombre, telefono, email, password, esAdmin) // Call al Builder Firebase Network API Create     
        } // Fin bind logix    

        binding.tvIrAlLogin.setOnClickListener { // Texto "Ya tienes cuenta? entras"  
            startActivity(Intent(this, LoginActivity::class.java)) // Trampollea Atrás Pantalla Login      
            finish() // MATA PANTALLA REGSITRO    
        } // logic   
    } // On Create End OS     

    private fun registrarUsuarioEnFirebase(nombre: String, telefono: String, email: String, password: String, esAdmin: Boolean) { // Network Func Builder Call BD AUTH   
        auth.createUserWithEmailAndPassword(email, password) // API MAGICA GOOGLE CREATE!     
            .addOnCompleteListener(this) { task -> // Listener Promsie Termino...  
                if (task.isSuccessful) { // If OK ...
                    val firebaseUser = auth.currentUser // Toma ref Mágica generada Google Token Recien Creada
                    if (firebaseUser != null) { // Safety Check token. 
                        guardarDatosUsuario(firebaseUser.uid, nombre, email, telefono, esAdmin) // Funcion Extra... Pasa la Token , Y Pasa TODA LA DATA FORM para Guardarlo En la base de Publica  
                    } // Fi
                } else { // FAIL CREATE 
                    Toast.makeText(this, "Error de registro: ${task.exception?.message}", Toast.LENGTH_LONG).show() // Grita Fail DB Auth UI  
                } // Fn error logic Auth 
            } // Listener fin 
    } // func create end

    private fun guardarDatosUsuario(uid: String, nombre: String, email: String, telefono: String, esAdmin: Boolean) { // Carga Public User Profile Data to Firestore JSON   
        val rolElegido = if (esAdmin) Role.ADMINISTRADOR else Role.CLIENTE // Transforma True/False a Enum (Nivel Dueño Dios o Mundano) 
        val user = User( // Arma El molde del usuario Publico 
            id = uid, // Injecta El Mismo ID que se generó Secreto En Google Auth    
            nombreUsuario = nombre, // asinga var    
            email = email, // var  
            telefono = telefono, // var    
            role = rolElegido // Var Enum Restringida 
        ) // Ends model construction Kotlin data class  

        db.collection("usuarios").document(uid).set(user) // Guarda en la ruta exacta Users >  UID de GOOGLE MAGIC   -> Sobrescribe todo el molde armado a fuego DB JSON   
            .addOnSuccessListener { // Promise Write Data Success ...   
                Toast.makeText(this, "¡Bienvenido $nombre!", Toast.LENGTH_SHORT).show() // Grita Felicidad Usuario lograd   
                irAlMenuPrincipal() // Avientalo ahora sí al Ruter Navegador Director a App Master   
            } // Fi succ 
            .addOnFailureListener { e -> // fail  
                Toast.makeText(this, "Error guardando datos: ${e.message}", Toast.LENGTH_SHORT).show() // Print UX Bad red error       
            } // FI fail 
    } // ends public profile write builder   

    private fun irAlMenuPrincipal() { // Identico al Login actiyity Router function logic    
        val currentUser = auth.currentUser // Toma Token  
        if (currentUser != null) { // Safety    
            db.collection("usuarios").document(currentUser.uid).get() // Llama BBDD por Documento Usruario 
                .addOnSuccessListener { document -> // Promise doc   
                    if (document.exists() && document.getString("role") == "ADMINISTRADOR") { // Evalua ROL DE ESE DOCUMENTO 
                        startActivity(Intent(this, AdminMainActivity::class.java)) // SALTA Dueño
                    } else { // Cuaquier otra  
                        startActivity(Intent(this, MainActivity::class.java)) // Salta Plebeyo     
                    } // end condit check      
                    finish() // Elimina Ruter Screen  
                } // ends promise ok     
                .addOnFailureListener { // Fail red get  
                    startActivity(Intent(this, MainActivity::class.java)) // FallBAck a Cliente Comun App Publica 
                    finish() // out  
                }     
        } // Fi   
    } // FN Router Master Logic end    
} // Clase REGSITER ACTIVITY ANDROID Fin. 
``` db.collection("usuarios").document(currentUser.uid).get()
                .addOnSuccessListener { document ->
                    if (document.exists() && document.getString("role") == "ADMINISTRADOR") {
                        startActivity(Intent(this, AdminMainActivity::class.java))
                    } else {
                        s```kotlin
package com.tuempresa.rentaapp.ui.common // Carpeta compartida de vistas usadas tanto por Cliente como por Dueño

import android.os.Bundle // Intercambio OS estados  
import android.view.LayoutInflater // Conversor Inflador XML a Canvas Grafico Android    
import android.view.View // Recuadro visual SO Android    
import android.view.ViewGroup // Contenedores Constraint Linear layout SO  
import android.widget.Toast // Feedback box negra chica UI     
import androidx.fragment.app.Fragment // Molde Vista Reciclable Fragmento      
import androidx.recyclerview.widget.LinearLayoutManager // Scroller Vertical listas   
import androidx.recyclerview.widget.RecyclerView // Modulo listador optimizado infinito     
import android.widget.TextView // View texto UI     
import com.google.firebase.auth.FirebaseAuth // Llaves Google Cuentas       
import com.google.firebase.firestore.FirebaseFirestore // Base de datos JSON Google Cloud      
import com.tuempresa.rentaapp.R // Repositorio Constantes XML strings dimens local    
import com.tuempresa.rentaapp.adapters.NotificacionAdapter // Traductor Datos BD a celda visual listado   
import com.tuempresa.rentaapp.models.Notificacion // Data Class Kotlin definicion de Notificación     
import com.tuempresa.rentaapp.ui.admin.AdminMainActivity // Master app dueños    

class NotificacionesFragment : Fragment() { // Clase Logica Listador Campana Avisos 

    private val db = FirebaseFirestore.getInstance() // DB  
    private val auth = FirebaseAuth.getInstance() // Cuenta  

    private lateinit var rvNotificaciones: RecyclerView // Inyector Lista  
    private lateinit var tvSinNotificaciones: TextView // Inyector Letras grandes "no hay nada aca"  
    private lateinit var adapter: NotificacionAdapter // Puntero Traductor Adaptador   
    private var listaNotificaciones = mutableListOf<Notificacion>() // Matriz cache visual RAM render display  

    // Cache: shortId (first 6 chars uppercase) -> product names string  // Dev comentario   
    private val orderNamesCache = mutableMapOf<String, String>() // Diccionario rapido Nombres ID Pedidos sin pegarle de nuevo a DB y que corra lento  
    private var rentasLoaded = false // Flag candado peticiones encadenadas   

    override fun onCreateView( // Inicializa Infla Fragment OS  
        inflater: LayoutInflater, container: ViewGroup?, // Entorno  
        savedInstanceState: Bundle? // EStado     
    ): View? { // Salida Canvas Visual     
        val view = inflater.inflate(R.layout.fragment_notificaciones, container, false) // Infla layout basico   
        rvNotificaciones = view.findViewById(R.id.rvNotificaciones) // Asigna by ID la lista XML  
        tvSinNotificaciones = view.findViewById(R.id.tvSinNotificaciones) // Asigna By id Letras Vacias XML   
        return view // Print to screen  
    } // return  

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // Ciclo 2, Ya esta pintado... a la logica.    
        super.onViewCreated(view, savedInstanceState) // Call SO Core     

        adapter = NotificacionAdapter(listaNotificaciones) { notif -> // Inicializa Renderizador y le pasa La funcion Lambda "Eliminar" a la campanita individual de cada celda.    
            eliminarNotificacion(notif) // Call borrador cuando pasen lambda back to here.    
        } // ends init adapter      
        rvNotificaciones.layoutManager = LinearLayoutManager(context) // Scroll Vertical Nativo acoplado  
        rvNotificaciones.adapter = adapter // Pégaselo al RV Listador 

        // First load all rentas to build cache, then load notifications // Dev commet  
        cargarCacheRentas { // Baja TODAS la ordenes para ver como se llamaban y armar cache...    
            cargarNotificaciones() // ... Y cuando termines, AHORA SÍ traete mi listado de notis feas y transformalas bonitas con la cache   
        } // Fin enlazador promesa  
    } // End UI Post init     

    /**
     * First loads the mobiliario catalog names, then builds a cache of
     * shortOrderId -> "Qty x ProductName, ..." from rentas collection.
     */
    private fun cargarCacheRentas(onComplete: () -> Unit) { // Constructor del Diccionario de Mapeos RAM Nombres para estetica app       
        // Step 1: load furniture catalog // Dev  
        db.collection("mobiliario").get() // Llama BBDD Catalogo Raíz Productos Totales     
            .addOnSuccessListener { mobSnap -> // IF OK GET ALL PRODUCTS ARRAY          
                val mobiliarioNombres = mutableMapOf<String, String>() // Crea Local HashMap ID-Name   
                for (doc in mobSnap.documents) { // Bucle All JSON Muebles     
                    val nombre = doc.getString("nombreProducto") ?: "" // Carga string name Silla Roja...   
                    if (nombre.isNotEmpty()) mobiliarioNombres[doc.id] = nombre // Inserta en RAM el Par  "sadsa8sd989" -> "Silla Roja"   
                } // Termina Llenado Caché Muebles Puros    

                // Step 2: load rentas and resolve names // dev 
                db.collection("rentas").get() // AHora LLama a BBDD Todo el MAsivo de Rentas Histórico  
                    .addOnSuccessListener { rentasSnap -> // Si traes todas exitoso...  
                        for (doc in rentasSnap.documents) { // Recorrelas Una por Una  (JSON Doc) 
                            val shortId = doc.id.take(6).uppercase() // Cortale al ID del pedido feo (9f8ds9fsdb) en ALGO BONITO (9F8DS9) para buscar mach  
                            val items = doc.get("items") as? List<*> ?: emptyList<Any>() // Agarra el Array de la Cesta de Objetos Cart.  
                            var names = "" // Prepara str 
                            for (rawItem in items) { // Recorre la Cesta de Compra  
                                val item = rawItem as? Map<*, *> ?: continue // Convierte Elemento JSON  
                                val furnitureName = item["furnitureName"] as? String ?: "" // Toma param nombre cacheado antiguo si existe 
                                val furnitureId = item["furnitureId"] as? String ?: "" // toma id del mueble 
                                val quantity = (item["quantity"] as? Long)?.toInt() ?: 1 // toma cuantas pidio 5,2 ...
                                // Use stored name → fallback to catalog → fallback to short ID // dev     
                                val displayName = when { // Priorizador Selectivo Nombres Seguros MAGIA   
                                    furnitureName.isNotEmpty() -> furnitureName // Caso 1 mas feliz: Ya venia en la Orden el nombre escrito, usalo .   
                                    mobiliarioNombres.containsKey(furnitureId) -> mobiliarioNombres[furnitureId]!! // CAso 2 No venia en Orden, búscalo por su ID en la MegaCACHE De Muebles construida en RAM !!     
                                    else -> "Artículo" // Cas 3 Falló todo, Ponle Articulo Genérico para que no crashe...   
                                } // Ends When Magia name resolver    
                                names += "${quantity}x $displayName, " // Concatena el Strign : 5x Silla Roja, 12x Mesa ,     
                            } // Ends For inner items  
                            names = names.removeSuffix(", ") // Limpia popo de comitas 
                            if (names.isNotEmpty()) { // Save RAM Cache only if not stupid empty  
                                orderNamesCache[shortId] = names // Guardo el diccionario en Master Cache :  ID PEDIDO CORTO (12KJL4)  ->  String Largote " 5x Silla Roja, 12x Mesa" .     
                            } // ends save     
                        } //Ends  loop all order big  
                        onComplete() // Lambda Promise Finished. Continua porfa !!    
                    } // Fi  
                    .addOnFailureListener { onComplete() } // Fail Safe bypass continue  
            } // FI     
            .addOnFailureListener { onComplete() } // fail safe   
    } // End builder Name CAche .    

    /**
     * Replaces "#XXXXXX" patterns in notification body with resolved product names.
     */
    private fun resolverNombres(cuerpo: String): String { // REGEX TRANSFORMER TEXT BEAUTIFIER        
        val regex = Regex("#([a-zA-Z0-9]{6})") // EXpreesion Regular "Buscame cualquier Gato #  y pito y seguido 6 letas"       
        return regex.replace(cuerpo) { match -> // REMPLAZA LA EXPRESION SI LA ENCUENTRAS EL CUERPO ...   
            val shortId = match.groupValues[1].uppercase() // Extare letras en mayus 
            val nombres = orderNamesCache[shortId] // BUSCA ESAS LETRAS EN EL MEGA DICCIONARIO CREADO ANTES EN RAM CACHE PARA VER A TRADUCCCION "Silaa Roja..mesa.."      
            if (nombres != null) "($nombres)" else match.value // SI LO ENCONTRASTE, POR FAVOR PARCHEA Y SOBRE ESCRIBE LO QEU DECÍA POR ESTE NObmre, SINO CALLATE Y DEJA LO OG.     
        } // Fin Return cadena parchaeda bonita magica .    
    } // Fin transformer  

    private fun cargarNotificaciones() { // Download Network Notificaciones Logics DB Query      
        val query = if (activity is AdminMainActivity) { // Inteligente: ¿QUIEN SOY? SOY ADMIN DUEÑO O CLIENTE RATA??? 
            db.collection("notificaciones") // DUEÑO: Puxca TODO. No Filtres  Nada.    
        } else { // CLIENTE RATON MUNDANO USER NORMAL:    
            val userId = auth.currentUser?.uid ?: return // Pide Mi Id Google Secreto     
            db.collection("notificaciones") // DB ROOT NOTIS   
                .whereEqualTo("paraUserId", userId) // DAME SOLO DONDE EL LABEL DIGA "PARA_USER" MI ID PROPIO Y NADA MAS    
        } // fIN condiconal query ROL    

        query.addSnapshotListener { snapshot, e -> // Abre Tunel En vivo Live changes   
            if (e != null) { // Fallo nula
                Toast.makeText(context, "Error cargando notificaciones", Toast.LENGTH_SHORT).show() // log
                return@addSnapshotListener // exit
            } // end fia  

            if (snapshot != null) { // Valida Snapshot ok   
                listaNotificaciones.clear() // Vacía la Cesta Render visual Actual para NO duplicar    
                for (doc in snapshot.documents) { // Itera todaS mis notificaciones qeu bajaron .       
                    val notif = doc.toObject(Notificacion::class.java) // Objeto Molde magico Kotlin 
                    if (notif != null) { // Si transformo bien 
                        // Resolve names on-the-fly for old notifications with order IDs //   
                        val cuerpoResuelto = resolverNombres(notif.cuerpo) // MAGIA INVOCA TRANSFORMER, Le meto el Cuerpecito Noti (P.ej "Aprovado #DSD34D") y Me devuelve ("Aprobado (5x Sillas)")      
                        val notifConId = notif.copy(id = doc.id, cuerpo = cuerpoResuelto) // Clona el molde, Asignado su id real Y REEMPLAZANDO con el CUERPO BONITO MAGICO MUTEADO Arriba    
                        listaNotificaciones.add(notifConId) // Ahora sí, Inyectalos en La Matriz visual UI     
                    } // Fi
                } // Next for docs. 

                listaNotificaciones.sortByDescending { it.timestamp } // Ordena por fecha mas nueva milisegunos epoch reloj   
                adapter.actualizarLista(listaNotificaciones) // Avienta golpe al UI Adapter a qeu lo renderice  

                if (listaNotificaciones.isEmpty()) { // Si ando Frio y no hay  
                    tvSinNotificaciones.visibility = View.VISIBLE // ENseña letrero triste qeu dice No hy 
                    rvNotificaciones.visibility = View.GONE // OCULTA ESCONDE EL RECYCLER VIEW DE CELDAS POR ENDE  
                } else { // Si  hay 
                    tvSinNotificaciones.visibility = View.GONE // eSCONDE LO Trsiste 
                    rvNotificaciones.visibility = View.VISIBLE // MUESTRA LA LIST VIEWS DE CAMPANITAS   
                } // ends logic ux viz views 
            } // end snap  
        } // ends Tunel Live Socket  
    } // Ends load. 

    private fun eliminarNotificacion(notificacion: Notificacion) { // Network Action Borrador Notification Db   
        if (notificacion.id.isEmpty()) return // Check id is  real  

        db.collection("notificaciones").document(notificacion.id) // Query DB NOTIS   DocID especificada Target Destroy 
            .delete() // BOMBARDEA ASYNCRONO    
            .addOnSuccessListener { // Funcio Promise Lambda Success de Delete...     
                Toast.makeText(context, "Notificación eliminada", Toast.LENGTH_SHORT).show() // Exito textito    
            } // Fi succ 
            .addOnFailureListener { e -> // FAll back e   
                Toast.makeText(context, "Error al eliminar: ${e.message}", Toast.LENGTH_SHORT).show() // Error fail UI   
            } // Fi fails   
    } // end func 
} // CLose Fragment Notificacino controller master Class   
```ciones.visibility = View.GONE
                    rvNotificaciones.visibility = View.VISIBLE
                }
            }
        }
    }

    private fun eliminarNotificacion(notificacion: Notificacion) {
        if (notificacion.id.isEmpty()) return

        db.collection("notificaciones").document(notif```kotlin
package com.tuempresa.rentaapp.ui.common // Seccion comun UI (Perfil) 

import com.tuempresa.rentaapp.ui.auth.LoginActivity // Trampolino a Login tras Desloguear

import android.content.Intent // Trampolin navegacion SO 
import android.os.Bundle // Intercambio de Activity status 
import android.view.LayoutInflater // Conversor Inflador Codigo UI XML y Canvas    
import android.view.View // Recuadro Nativo Android 
import android.view.ViewGroup // Lienzo Contenedor   
import android.widget.Toast // Recuadro popup alerta chiquito  
import androidx.fragment.app.Fragment // Molde Vista Controller reusable de app     
import com.tuempresa.rentaapp.databinding.FragmentPerfilBinding // Bind views auto 
import com.google.firebase.auth.FirebaseAuth // Acceso a Cierre Sesiones auth engine global    
import com.google.firebase.firestore.FirebaseFirestore // Lector BD Datos del perfli nombree 

class PerfilFragment : Fragment() { // Clase Logica del "Mi Cuenta" Settings  

    private var _binding: FragmentPerfilBinding? = null // Var nula memory safe    
    private val binding get() = _binding!! // Inyector rapido     

    private val auth = FirebaseAuth.getInstance() // Genera pipe Google Tokens 
    private val db = FirebaseFirestore.getInstance() // Genera Pipe DB Documentos    

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View { // Init UI Paint 
        _binding = FragmentPerfilBinding.inflate(inflater, container, false) // Inflar  
        return binding.root // Pinta layout screen 
    } // return  

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // Ciclo 2 Post render    
        super.onViewCreated(view, savedInstanceState) // Call OS base  

        cargarDatosUsuario() // LLamada NUBE Descargar MIS Nombres para llenar Cajas Vacias automatico     

        binding.btnGuardarPerfil.setOnClickListener { // Listen CLICK "Acualizar Mis Datos" Gigante azul.  
            guardarDatosUsuario() // Accion BBDD UPDATE Patcher Overwriter    
        } // logic   

        binding.btnCerrarSesion.setOnClickListener { // Escucha boton Rojo Inferior Cerrar Sesión Out   
            auth.signOut() // BOMBARDERO Mágico Cierra Sesion y Destruye Galleta en Celular Local cache .    
            val intent = Intent(requireContext(), LoginActivity::class.java) // Trampolin salto al Inicio LOGIN. PUM!   
            // Clear entire task stack so user can't press back to go back into the app // dev    
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK // Banderas SO Especiales Android "DESTRUYE TODA LA PILA MAESTRA DE PANTALLAS (Historico de boton de volver atras)". Bloqueandolo FUERA por seguridad!         
            startActivity(intent) // Vamonos ALV    
        } // Logix quit   
    } // On cread fi    

    private fun cargarDatosUsuario() { // Net Downloader Mis Datos Setttings     
        val userId = auth.currentUser?.uid ?: return // Checo Mi token google mi ID y continua.     

        db.collection("usuarios").document(userId).get() // Llama a Usuarios mi ID mi Documento 
            .addOnSuccessListener { document -> // Exito Bajar document ...    
                if (document.exists()) { // Porsiacaso existe  
                    binding.etNombrePerfil.setText(document.getString("nombreUsuario")) // LLENA LA CAJA TEXTO 1 UI con Data DB NAME         
                    binding.etTelefonoPerfil.setText(document.getString("telefono")) // LLENA LA CAJA TEXTO 2 UI con Data DB CELLULAR PHONE        
                    binding.etEmailPerfil.setText(document.getString("email")) // LLENA LA CAJA TEXTO 3 UI (Gris Ineditable pq no dejan cambiar correos auth) con Data Correeo  
                } // fi if    
            } // FI 
            .addOnFailureListener { // Fail red nuble get    
                Toast.makeText(context, "Error cargando perfil", Toast.LENGTH_SHORT).show() // Print msg    
            } // fin fail     
    } // Fi func 

    private fun guardarDatosUsuario() { // Actioner de Subir mis NUEVOS datos y Parchear Perfil PUBLICO MIO      
        val userId = auth.currentUser?.uid ?: return // Toma ID    
        val nuevoNombre = binding.etNombrePerfil.text.toString().trim() // Tira caja 1 form nombre editado o viejo    
        val nuevoTelefono = binding.etTelefonoPerfil.text.toString().trim() // Tira caja 2 form cellular nuevo  o viao. 

        if (nuevoNombre.isEmpty() || nuevoTelefono.isEmpty()) { // Validacion tonta UX no vacios      
            Toast.makeText(context, "Los campos no pueden estar vacíos", Toast.LENGTH_SHORT).show() // Fail  
            return // abort  
        } // fi. 

        val updates = mapOf( // Builder Generador De Hash MAP JSON Estructura SOLO LOS DOS CAMPOS a PARCHEAR "PATCH"   (No Sobreesrcibr y Cargarme la cuenta , solo un update patch) 
            "nombreUsuario" to nuevoNombre, // update A 
            "telefono" to nuevoTelefono // udpate B 
        ) // map 

        db.collection("usuarios").document(userId).update(updates) // Envialo el pedazo Parche a BBDD Google Table Users my ID .   
            .addOnSuccessListener { // Promise SUcess lambda 
                Toast.makeText(context, "Perfil actualizado", Toast.LENGTH_SHORT).show() // Exito ui feed back .    
            } // fin fn
            .addOnFailureListener { e -> // fail db perm rules or internet 
                Toast.makeText(context, "Error al actualizar: ${e.message}", Toast.LENGTH_SHORT).show() // feedb bad rojo   
            } // error handling 
    } // end func 

    override fun onDestroyView() { // MAtador fragment memoria  
        super.onDestroyView() // call so   
        _binding = null  // Purga memory leak  del Inflated pointer UI   
    } // ends overriding killer so.    
} // Clase Master Fragment Settings Account PErfil FIN 
```den estar vacíos", Toast.LENGTH_SHORT).show()
            return
        }

        val updates = mapOf(
            "nombreUsuario" to nuevoNombre,
            "telefono" to nuevoTelefono
        )

        db.collection("usuarios").document(userId).update(updates)
            .addOnSuccessListener {
                Toast.makeText(context, "Perfil actualizado", Toast.LENGTH_SHORT).show()
            }
            .addOnFai```kotlin
package com.tuempresa.rentaapp.ui.user // Paquete Vistas publicas Cliente Tienda  

import com.tuempresa.rentaapp.models.Producto // Molde Cesta + Mueble 
import com.tuempresa.rentaapp.adapters.ProductoAdapter // Listador Render Catalogo 

import android.os.Bundle // Intercambio OS estados  
import android.view.LayoutInflater // Conversor Inflador XML a Canvas Grafico Android    
import android.view.View // Recuadro visual SO Android    
import android.view.ViewGroup // Contenedores Constraint Linear layout SO  
import android.widget.Toast // Feedback box negra chica UI     
import androidx.fragment.app.Fragment // Molde Vista Reciclable Fragmento      
import androidx.recyclerview.widget.LinearLayoutManager // Scroller Vertical listas   
import com.google.firebase.firestore.FirebaseFirestore // Base de datos JSON Google Cloud      
import com.tuempresa.rentaapp.databinding.FragmentCatalogoBinding // Autovinculador XML a Codigo 
import com.tuempresa.rentaapp.models.FurnitureItem // Molde Mueble PURO 

class CatalogoFragment : Fragment(), ProductoAdapter.OnCantidadChangeListener { // Clase Fragmento Escaparate Principal . Escucha interface si "cambia la cantidad en una celda"

    private var _binding: FragmentCatalogoBinding? = null // Puntero Nulable al xml ui  
    private val binding get() = _binding!! // Inyector rapido     

    private var listaWrapperProductos = mutableListOf<Producto>() // Matriz cache visual RAM render display  de "Lo que hay en tienda +  Cuantos escogi (0. 1. 5) "
    private val db = FirebaseFirestore.getInstance() // Encahe BD    

    override fun onCreateView( // Inicializa Infla Fragment OS  
        inflater: LayoutInflater, container: ViewGroup?, // Entorno  
        savedInstanceState: Bundle? // EStado     
    ): View { // Salida Canvas Visual     
        _binding = FragmentCatalogoBinding.inflate(inflater, container, false) // Inflar layout basico   
        return binding.root // Pintarlo en la Pantalla 
    } // done. 

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // Ciclo 2 LOGICA 
        super.onViewCreated(view, savedInstanceState) // Call OS base  

        binding.rvProductos.layoutManager = LinearLayoutManager(requireContext()) // Prende la lista infinita en modo vertical clasico   

        binding.btnConfirmarRenta.setOnClickListener { // Escucha boton Flotante "Ir a Pagar"   
            val seleccionados = listaWrapperProductos.filter { it.cantidadSeleccionada > 0 } // FILTRADOR MAGICO: De toda la matriz de Tienda, Saca solo los que la "Cantidad" sea mayor a Cero.    

            if (seleccionados.isEmpty()) { // Validacion: si la lista Filtrada resultó vacia pendejo. 
                Toast.makeText(requireContext(), "Selecciona al menos un producto", Toast.LENGTH_SHORT).show() // REgaña al pendejo en pantala
                return@setOnClickListener // abortar  pago qwu no trae nada .
            } // fin valicdaicon 

            (activity as? MainActivity)?.irConfirmacion(seleccionados) // MAGIA: PIDE AL PADRE "ACTIVITY" QUE LO TOME TELETRANSPORTE A LA OTRA PANTALLA "CONFIRMACION" Y LE PASE EL CARRITO LLENO EN LA BOCA !!    
                ?: Toast.makeText(requireContext(), "Error de navegación", Toast.LENGTH_SHORT).show() // Porsiacaso el padre era nulo falla y no crash 
        } // fn pay 

        consultarProductos() // Llamada Descarga Tienda inicial automatica .    
    } // en  init 

    private fun consultarProductos() { // BBDD Lector Vivo Inventario Escaparate     
        db.collection("mobiliario") // Apunt al catalogo de muebles  
            .whereGreaterThan("totalStock", 0) // No mostrar cosas dadas de baja // OJO QUERY DONDE OBLIGO: MOSTRAR SOLO COSAS QUE TENGAN STOCK REGISTRADO HISTORICO> 0 (SI NUNCA COMPRÉ, NI LO MUESTRES , ES BASURA)      
            .addSnapshotListener { snapshot, error -> // Conecta TUBERIA DE SOCKET EN VIVO . SI CAMBIA en ADMIN la APP, ACA SE MUEVE EN TIEMPO REAL LA PANTALLA !!!   
                if (!isAdded || _binding == null) return@addSnapshotListener // Safe memory leak eviter Si cierro app 
                
                if (error != null) { // Faallo tuberia o red    
                    Toast.makeText(requireContext(), "Error al cargar catálogo", Toast.LENGTH_SHORT).show() // log
                    return@addSnapshotListener // exit error
                } // fi 

                if (snapshot != null) { // Valida Tuberia Con datas     
                    listaWrapperProductos.clear() // Vacia mi RAM Tienda actual parap no duplicar basusa  
                    for (doc in snapshot.documents) { // Bucle de iteraccion de los JSON bajados .     
                        val item = doc.toObject(FurnitureItem::class.java) // Transformador a Molde kotlin Mueble     
                        if (item != null) { // Si funcino biven el modeador      
                            listaWrapperProductos.add(Producto(furniture = item, cantidadSeleccionada = 0)) // Magia: CREO UNA CAJA ECOMMERCE "Producto()", le INYECTO eL MUEBLE PURO adentro "furniture=item" Y LO INICIO en CERO PIEZAS ESCOGIDAS !!!   
                        } // fin tran 
                    } // loop end 
                    binding.rvProductos.adapter = ProductoAdapter(listaWrapperProductos, this) // LANZALE TODA LA LISTA AL TRADUCTOR ADAPTER Y QUE EMPIECE A PINTAR CUADRITOS DE PRODUCTOS DE VENTA !!!   
                } // en if shot 
            } // ends tunel vivo 
    } // ens reader db  

    override fun onCantidadChanged() { // OVERRIDE de Interface. ALGIN Toco El Botoncito "+" o "-" allá ADENTRO  DE LA CELDA DE LA LISTA ... M e CHISMEAN HASTA ACÁ ARRIBA.     
        (activity as? MainActivity)?.actualizarTotal(listaWrapperProductos) // YO DE RÄPIDO LE DIGO AL PAPÁ ACTIVITY "EY, RECALCULA EL TOTAL $$$ " Y LE PASO LA LISTA ACTUALIZADA !!      
    } // termina funcion chisposa.  

    override fun onDestroyView() { // MAtador fragment memoria  
        super.onDestroyView() // call so   
        _binding = null  // Purga memory leak  del Inflated pointer UI   
    } // ends overriding killer so.    
} // Clase Termiana master Catalogo 
```                for (doc in snapshot.documents) {
                        val item = doc.toObject(FurnitureItem::class.java)
                        if (item != null) {
                            listaWrapperProductos.add(Producto(furniture = item, cantidadSeleccionada = 0))
                        }
                    }
                    binding.rvProductos.adapter = ProductoAdapter(listaWrapperProductos, this)
                }```kotlin
package com.tuempresa.rentaapp.ui.user // Carpeta publica vistas app clieetne 

import com.tuempresa.rentaapp.models.Producto // Molde Caja de Carrito con cantidades 
import com.tuempresa.rentaapp.R // XML Res folder  

import android.Manifest // SO Permisos Hard Core system  
import android.app.AlertDialog // Dialogos Modales Nativos popup 
import android.app.DatePickerDialog // Modales Nrativos Calendario Picker Fechas  
import android.content.ClipData // Portapapeles COPY paste memory  SO 
import android.content.ClipboardManager // Manager De protaPapele SO    
import android.content.Context // Entorno 
import android.content.Intent // Trampolin navegacion exterior AP P
import android.content.pm.PackageManager // Lector MAnifiesto Instalador SO permisions 
import android.net.Uri // Parseer link 
import android.os.Build // OS Infos 
import android.os.Bundle //  estados 
import android.view.LayoutInflater // XML a Canvas ui  
import android.view.View // Caja vista basica 
import android.view.ViewGroup // Parent caja  
import android.widget.Toast // Feedback UI Textbox chiquito .    
import androidx.activity.result.contract.ActivityResultContracts // Launcher peticiones SO OS Permisos en vivo
import androidx.core.content.ContextCompat // Checador Color/Permiso 
import androidx.fragment.app.Fragment // Master class 
import com.tuempresa.rentaapp.databinding.FragmentConfirmacionBinding // Autokotiin linker view
import com.google.firebase.auth.FirebaseAuth // Cuenta gogle  
import com.google.firebase.firestore.FirebaseFirestore // Nuble DB JSon 
import com.tuempresa.rentaapp.models.CartItem // Sub Molde JSON de "1 Silla x 100$"   
import com.tuempresa.rentaapp.models.OrderStatus // Enum estadoos Pedido Enum : PENDING , ACTTIVE ...  
import com.tuempresa.rentaapp.models.PaymentStatus // ENU ESTADO PAGO Enum: Pending aporbed   
import com.tuempresa.rentaapp.models.RentalOrder // MEGA MOLDE JSON DEL PEDIDO MAYOR ORDEN "Ticket Compra de Boddega Aurrera"   
import com.tuempresa.rentaapp.utils.NotificationHelper // Mi CLase Utilera Lanzadora campanas  
import java.util.* // Time fechas util java old  

class ConfirmacionFragment : Fragment() { // CLASE LOGICA DE CHECKOUT PAYMENTS FINALES (Carrito y Pagar!)   

    private var _binding: FragmentConfirmacionBinding? = null // Nullale ui binding pointer 
    private val binding get() = _binding!! // Getter seguro 

    private lateinit var listaProductos: ArrayList<Producto> // MI CARRO VIRTUAL RAM DE COMPRAS    
    private var total: Double = 0.0 // CUENTA MATH SUBTOTAL A PAGAR NUMERO 

    private var fechaEntregaMs: Long = 0L // Timestamp Cero Unix (Cunado Te lo mando?) 
    private var fechaDevolucionMs: Long = 0L // Timestamp Unix (Cuando recogemos?) 

    private val db = FirebaseFirestore.getInstance() // BD cloud firestoe
    private val auth = FirebaseAuth.getInstance() // Tokens id 

    // Launcher para pedir permiso de notificaciones (Android 13+)  // Dev coms  
    private val notifPermissionLauncher = registerForActivityResult( // DECLARA OBJETOs NATIVO SO ANDOROID MODERNO "PIDEL PERMISO"   
        ActivityResultContracts.RequestPermission() // QUe quiero? Permisio   
    ) { /* no-op: el usuario puede denegar, no bloqueamos la acción */ } // SI em dijo NEl PRRO: CAllate , me vale verga. No crashees   

    override fun onCreate(savedInstanceState: Bundle?) { // CICLO 1 NATIVO: ANTES de PINTAR, CARGA DATSO 
        super.onCreate(savedInstanceState) // Init SO 
        listaProductos = arguments?.getSerializable("productos") as? ArrayList<Producto> ?: arrayListOf() // MAGIA: EL PADRE CATALOGO ME MANDO UN PAQUETE SECRETO (Arguments) con el STRING SERIALIZADO "productos", ATrapalo y CASTEA a MI CARRITO RAM!!!    
        total = calcularTotal() // Apenas inicie la compu, CAlcula Sumatoria $$$ Math loop 
    } // fi pre ui  

    override fun onCreateView( //  CICLO 2 PINTA XML EN PAntalla blanca 
        inflater: LayoutInflater, container: ViewGroup?, // tools paitn 
        savedInstanceState: Bundle? // states  
    ): View { // reutrn Canvas 
        _binding = FragmentConfirmacionBinding.inflate(inflater, container, false) // infla
        return binding.root // enseña ! 
    } // done.    

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // CCICLO 3 LOGICA DEL DOM  BOTONES 
        super.onViewCreated(view, savedInstanceState) // CALL O S sO 

        // Solicitar permiso de notificaciones si es Android 13+  // Dev c 
        pedirPermisoNotificaciones() // INVOCO AL NATIVO: "Ey PopUp Android molesto... DEJAME MANDARTE CAMPANITAS!"   

        binding.tvTotalConfirmacion.text = "Total a pagar: \$$total" // PLe CArga Textito Gigante en patnalla : Tota $599

        var resumen = "Artículos rentados:\n\n" // Crea string master Textito lista Ticket Bodega  
        listaProductos.forEach { // Itera mi RAM carro Compras      
            resumen += "- ${it.cantidadSeleccionada}x ${it.furniture.nombreProducto} (\$${it.furniture.precio} c/u)\n" // 2x SIila ($10cu)... concatena  
        } // end loop 
        binding.tvResumenArticulos.text = resumen // Pegale el Ticket de bodega largo a la VIsita UX  

        binding.btnFechaEntrega.setOnClickListener { // Listen CLICK CAlendario 1 Start Date   
            mostrarDatePicker { timestamp, fechaString -> // PopUp NATIVO Android Java Old Calendar Date ... (Callbak lambda devuvlevme  2 cosas )    
                fechaEntregaMs = timestamp // GUARDA VARIABLE EN LONG EPOCH MILLIS PA LA BD (FACIL FILTRAR) 
                binding.btnFechaEntrega.text = "Entrega: $fechaString" // GUARDA EL TEXTTITO "21/Abril/2026"  PA EL BOTON GIGANETE  (Fácil de leer Pendejo USuario)     
            } // fin call   
        } // logic  

        binding.btnFechaDevolucion.setOnClickListener { // Lietn clik Calendar 2  End date     
            mostrarDatePicker { timestamp, fechaString -> // Abre Popup nativo SO  y devuelve 2 cositas 
                fechaDevolucionMs = timestamp // Guarad epoch long math 
                binding.btnFechaDevolucion.text = "Devolución: $fechaString" // Cambia texcto a 22 abril ...  
            } // fn cb 
        } // end btn 

        binding.toggleMetodoPago.addOnButtonCheckedListener { _, checkedId, isChecked -> // Liten Grupo de Botoones Opcion Multiples... O EFECTIVP O TRANSFER (Radio button grupal on streodis material UI )
            if (isChecked) { // Si apachurraron uno...   
                if (checkedId == R.id.btnPagoTransferencia) { // Cual de los 2 botones es ? EL de Transfer?   
                    binding.llDatosTransferencia.visibility = View.VISIBLE // Si fue transfer, APARECE MAGICAMENTE UN CUADRO GRANDE DE TEXTO SECRETO Plegable CON LA CLABE BANCARIA !!     
                } else { // Ah FUE EFECTIVO BILLETE??  
                    binding.llDatosTransferencia.visibility = View.GONE // ENTONCES DESAPARECELO Y OCULTA EL CONTENEDOR DE LA CLAVE CLABE ...    
                } // FI  MAGIA DINAMICA UX !  
            } // end fia  
        } // fin grupu toggle .  

        binding.btnFinalizarRenta.setOnClickListener { // LISTEN CLICK "ENVIAR PEDIDO !! y PAGAR YA! PAdre DE Totos los cliks 
            if (fechaEntregaMs == 0L || fechaDevolucionMs == 0L) { // VALIDACIÓN PENDEJO 1: NO PUSISTE FECHA EN LOS CALENDARIOS ANTES DE PAGAR .     
                Toast.makeText(requireContext(), "Selecciona ambas fechas", Toast.LENGTH_SHORT).show() // REGAÑO  
                return@setOnClickListener // ABORTA PAGO ALV 
            } // end vali d 
            if (fechaDevolucionMs < fechaEntregaMs) { // VBlaidaicon PENDEJO 2: ME quieres  "Devovler " la madre , antes de ueustrae la "Entrego"?    
                Toast.makeText(requireContext(), "Fecha de devolución inválida", Toast.LENGTH_SHORT).show() // REGAÑO LOGICO  Fisica Quantica FAIL 
                return@setOnClickListener // aborta misiop
            } // fin 
            if (binding.toggleMetodoPago.checkedButtonId == View.NO_ID) { // VALIDACION PENDEJ O 3: Ni me pusito como me bas ap agar OEFEC o Trans?    
                Toast.makeText(requireContext(), "Selecciona un método de pago", Toast.LENGTH_SHORT).show() // REgaña 
                return@setOnClickListener // abort   
            } // fin valid a

            binding.btnFinalizarRenta.isEnabled = false // LOGIC MEGA UX: BLOQUEA EL BOTON ENTERO !! APAGALO! PONLO GRIS! PARA QUE LA SEÑORA RATA NO LE PIQUE 18 VECES SEGUIDAS MIENTRAS CARGA EL WIF Y ME COMPRE 18 PEDIDO MISMOS!! !!   
            procesarRenta() // MAGHIA: COMIENZA EL PROCESO DE VENTA SERIO ATOMICO RED Y ENVIO DE CORREOS. 
        } // FI Btn send   
    } // find DOM Logic views    

    private fun pedirPermisoNotificaciones() { // LANZADOR DE PERMISO OBTUSO API 33+ ANDORID MODRNOS   
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) { // SI TIENES ANDROID VIEJO, IGNORA ESTO. SI ES DE 13 PAL REAL:    
            if (ContextCompat.checkSelfPermission( // LECTOR MANIFIESTO: "A ver.. tu... aplicacoion... yatienes le check palomito verde otorgado?? "     
                    requireContext(), Manifest.permission.POST_NOTIFICATIONS // del POSTEAR NOIITIFIF   
                ) != PackageManager.PERMISSION_GRANTED // "Si Nel , No lo has garantizado bro...."   
            ) { // SO ... 
                notifPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS) // PUES LANZA EL PUTO POP UP DE SISTEMA "QUIRES PPERMITOR???!!  Y QUE EL RATA DECIDA! "    
            } // FIN SO check 
        } // fifn verson check  
    } // fi dnc 

    private fun mostrarDatePicker(onDateSelected: (Long, String) -> Unit) { // UTILERIA LAUNCHER POP UP CALENDARIO VIEJO      
        val c = Calendar.getInstance() // java OLD FECHAS TIME Obeject Now()  
        val year = c.get(Calendar.YEAR) // AÑO HOY MATH  
        val month = c.get(Calendar.MONTH) // NMS MATH 
        val day = c.get(Calendar.DAY_OF_MONTH) // DIA DA  

        DatePickerDialog(requireContext(), { _, y, m, d -> // LANZADOR CLASE VIEJA CACA ANDROID POP UP CALENDAR  
            val sel = Calendar.getInstance() // Toma objecto clenadro math 
            sel.set(y, m, d) // SETEALO A LO QU UEY USUARIO APRETO CON SU DDEDO . 
            val formatStr = "$d/${m + 1}/$y" // FORMATER CAADNEA BOONITA PARA REGRESAR  (mES E CERO Y SE LE SUMA 1 PA QUE NO SALGA PENDEJ O )   
            onDateSelected(sel.timeInMillis, formatStr) // LAMBDA MAGICA DE "RETURN" MULTIPLE: tOMA TE REGRESO PA QUE LO USES  Los MIlisegundotes de Epoca de linux  y El textido bonit.o      
        }, year, month, day).apply { // al crear la caca viejo calendar   
            datePicker.minDate = System.currentTimeMillis() - 1000 // OJOOOOO PROHIBIDO SELECCIONAR FECHAS DE AYER O VIAJAR EN EL TIEMPO PASADO ! TE BLOQUEO LOS DOS EN EL CALENDITOOOOO !!    
        }.show() // ENEsñolo pantalla a ui 
    } // din utilr  

    private fun calcularTotal(): Double { // MAth Cesta   
        return listaProductos.sumOf { (it.furniture.precio * it.cantidadSeleccionada) } // Loop iterativo lambda kotlin: Summe y mulplicame PRecioxCANtidad y Dame El tota l 599.4 
    } // f dn func CAlctulo. . 

    private fun procesarRenta() { // FUNCIO ATOMICA MEGA CRITICA: VENDER Y Mover INVENTARIO EN DB LIVE SIN CAHARLA     
        val userId = auth.currentUser?.uid // Check Quien esta ccomprnado id    
        if (userId == null) { // Si erest fontasa crashead null ..  
            Toast.makeText(requireContext(), "Error de sesión", Toast.LENGTH_SHORT).show() // REgaña fail accound token expirado ...  
            binding.btnFinalizarRenta.isEnabled = true // Y RE PRENDE el boton porsilas dudas, pa que lo  Vuelva puchar depies de arerglar error    
            return // abort transacc.       
        } // in nul id check 

        val metodoPago = when (binding.toggleMetodoPago.checkedButtonId) { // MAGIA WHEN: DEtctar qwu boton esta picado ?      
            R.id.btnPagoEfectivo -> "Efectivo" // Strign puro EFECTVOO    
            R.id.btnPagoTransferencia -> "Transferencia bancaria" // STRi trar 
            else -> "No especificado" // STR idunno error 
        } // fin wne d

        val orderId = UUID.randomUUID().toString() // GENERAME UN TICKET UNIVERSAL ID RANDOM HASH  ALFANIUMERICO (DSF9S8F89SDFDS0DSF)        
        val cartItems = listaProductos.map { // MAGINA KOTILIN : TOMA mI RAM CAJA DE COMPRAS Y CONVIERTELA "MAPEA" EN OBJETITOS CHIQUITOS JSON LISTOS PARA BBDD RED !!      
            CartItem(it.furniture.id, it.furniture.nombreProducto, it.cantidadSeleccionada, it.furniture.precio) // CREO 1 Carton item  "Silla x 5 piezas a 10$"  e igonora foto s , urls , desccripcioenes y bla blaba .. SOLO LLO BASE !      
        } // FIN MAGIA CONVERSION A LIGERO Cart     

        val order = RentalOrder( // CREO EL JSON MASTER OBJECT: TICKET DE BOEGA AURRERA!! Y ENLAZO COSAS:   
            id = orderId, // EL HASH   
            userId = userId, // MI TOKEN QUIEN COMPRO 
            items = cartItems, // MI CANASTITA POBRE DE COMPARA LIGUERA "CART ITEMS"   
            deliveryDate = fechaEntregaMs, // CUANDO QUIRES ENTREGA (EPOCHS RED ) 
            returnDate = fechaDevolucionMs, // CDO QUIERS DEVULOE O RECOGEP? (EPOCHRED ) 
            status = OrderStatus.PENDING, // COMO ESTA? ACTIVO O  PENDiENTE DE APRBACION DEL ADMIN PAPI? PUES PENIDNTE Enum    !          
            paymentStatus = PaymentStatus.PENDING, // PAgASte?  PENDIDETE DE APORVACION PAPI ENUM . 
            totalCost = total, // CUTANO TE CORBA MO S Math $$$ ? 
            paymentMethod = metodoPago // EFCE  O TRANS STRING 
        ) // MEGA OBJETO MOLDEADDO JSON LISTO PAA SER LANZADO AL ESPAICIO BBDD NUBEE  ... 

        // Transacción Firestore: PRIMERO todas las lecturas, LUEGO todas las escrituras  // Dev 
        db.runTransaction { transaction -> // TRANSACCION "ATOMICA" BBDD NUBE. (ESTO SIGNFICA: SE HACE TODO PERFECTO MATHS O SE REVIERTA Y NO TE COBRO NI MADRES , A PRUEBA DE CRASH Y DE 2 WEUYES COMRPADNO MISMA SILLA AL MISMO SEGUDNDO!! )        

            // ── FASE 1: TODAS las lecturas ──────────────────────────────────────────  // DEV 
            val snapshots = listaProductos.map { pro -> // TOMA EL CHARRITO CHIDO FOTOGFRAFIAS.... :     
                val docRef = db.collection("mobiliario").document(pro.furniture.id) // HAS UN PUNTERO EXACTO HACIA EL INVENTARIO GLOBAL DE ESE PUTO MUEBRLE ESPECIFICO (EJ. Silla )    
                Pair(pro, transaction.get(docRef)) // MAGIA READ LIVE DEL SERVIDOR ACTUAL MILISEGUDO! (CUANTAS SILLAS HAY ESTRICTAMENTE AHORITA ALLA EN GOOGLE?? )    
            } // FI READERS     

            // ── FASE 2: Validar stock ─────────────────────────────────────────────── // DEV 
            snapshots.forEach { (pro, snapshot) -> // Itera mi respuesat lecturas live!    
                if (!snapshot.exists()) { // SE BORRO DE LA FAZ DE L TIERRA MIENTRAS YO LLENAZA EL CARRO?      
                    throw Exception("Producto no encontrado: ${pro.furniture.nombreProducto}") // CRAshea E L ATOMCO ROOL BACK ABOPRTA Y LLORA EN ROJO   ! 
                } // FI Existo snpa 
                val stockActual = snapshot.getLong("existencia") ?: 0 // SACA EL "STOCK ACTUAL VERDARO HOY!" de DB (p/ej 5)...   
                if (stockActual < pro.cantidadSeleccionada) { // OYE PRRO.. QUIRES COMRPAR 60 Y NOMAS TENGOS 5??????!!! 
                    throw Exception("Sin stock para: ${pro.furniture.nombreProducto}") // CRASGEAO EL ATRCOMICO . ROOLBCKKCKC . GRITALO E NROJO ERRO EROR!    
                } // FIN VALIDAICO MATH ROBO SOBRECOMRPA !  
            } // FIN FASE 2   

            // ── FASE 3: TODAS las escrituras ─────────────────────────────────────── // DE V.. (Si legamos aqui todo es legan ly no crash !)  
            snapshots.forEach { (pro, snapshot) -> // VA de nuez...     
                val stockActual = snapshot.getLong("existencia") ?: 0 // TOMA el viejo (p ej 5 )     
                val docRef = db.collection("mobiliario").document(pro.furniture.id) // APuneta al item ... 
                transaction.update(docRef, "existencia", stockActual - pro.cantidadSeleccionada) // DISPARA ESCRITURA: UPDATE INVENTARIO. "Restale el cActual(5) MENOS Lo Que Compró este Pende(1) ! y PON un 4 ACTUALIZADO NUEVO LIVE ! .      
            } // FN ALL INEVNTARO UPDATES (restas ) 

            // Guardar el pedido // Dev 
            val orderRef = db.collection("rentas").document(orderId) // APUNATA a l coleecino de TIKCETS "rnetas"   y PONEL MId UUID hash de tiket mio !!  
            transaction.set(orderRef, order) // SETEA, SUBE , APLICA , EL PINCHEE TICKET RENTAL ORDEN MASTER (CREADO ARRIIBA ) Y MANDALO!!   BOOM     

            null // RETUN DEL TRANSATTTICN EXIGITDO POR KOTILINA   SO  NULO  (Todo BIEN Ntohihg fail bro  )  
        }.addOnSuccessListener { // LA PROMESA DE LA RED VOLVIO 1 SEgundo DESPUES A MI CELULAR . DIJO... TODO FUE EXACTO CHIDO ATOMICO !! COMPRADO EXIOTOSO RESTADO INENTARO Y CREADO TICKET !!         
            // Pre-calcular nombres para todas las notificaciones // dve   
            var productosNombres = "" // Strign builder noti   
            listaProductos.forEach { productosNombres += "${it.cantidadSeleccionada}x ${it.furniture.nombreProducto}, " } // Builder bonito CArro ("3 Slas ..")     
            productosNombres = productosNombres.removeSuffix(", ") // clead basura texto comma a

            // Notificación local al usuario // dev 
            NotificationHelper.mostrar( // CLASE UTLIERA NOOTIFIACOINES. MUESTRA UN TOAST GRANDOTOEOOO PUSH LOCAL ANDROID PANTALLA !! (Dliinn! )    
                requireContext(), // co 
                "✅ Renta Confirmada", // title  noti    
                "Tu pedido ($productosNombres) ha sido enviado. Total: \$${"%.2f".format(total)}" // Bofy nooio    y formatesd 2 decimals string interoplation
            ) // fn dincnotfi 

            // Escribir notificación en Firestore para el admin // dv  
            enviarNotificacionFirestore( // FUNCION MAOGICA: TIRALE LA DB FIRESTE NOITIFI UN TXTO PARA QUE EL ADMIN DUEÑO LE SUENE SU CELULARR!!!   
                paraRol = "ADMINISTRADOR", // Solo los admin  
                paraUserId = null, // todos we sin id   
                titulo = "🛋️ Nuevo Pedido",  // tutio 
                cuerpo = "Pedido de: $productosNombres — \$${"%.2f".format(total)} — Pago: $metodoPago" // cuerpon   
            ) // fon fn fsnend  

            Toast.makeText( // Toas chquitiro feebd 
                requireContext(), // co n   
                "¡Renta confirmada exitosamente!", // td
                Toast.LENGTH_LONG // tm 
            ).show() // shot 

            (activity as? MainActivity)?.limpiarCarrito() // LLLAMAA AL PAPA ACTIVITY" EY BORRA LA RAM Y VACIAME EL CARRO DE SUPER QUE YA PAGUÉ GRACIAS "    
            parentFragmentManager.popBackStack() // MATATE TU SOLITO FRAAGMENT Y REGRESAME AL CATALO OG INICIO ALV DE LA PAANtllA     

            // Enviar correo básico // DEDv 
            val userEmail = auth.currentUser?.email ?: "Usuario desconocido" //  Quine soy correeo GOogle e ? 
            val adminEmail = "admin@rentamobiliario.com" // Correo administrador basico (HARDCOORED REQUISITOS GMAIL  )     
            var resumenCorreo = "Artículos rentados:\n" // Strgi ticket text 
            listaProductos.forEach { // Carga lita vualta ..     
                resumenCorreo += "- ${it.cantidadSeleccionada}x ${it.furniture.nombreProducto} (\$${it.furniture.precio} c/u)\n" // forma e   
            } // fii n loop car eamile  
            val body = "Hola, se ha confirmado una nueva renta.\n\n" + // STRING CONCAENTACINO BRUTA DE CORRO : hOLA ...  
                       resumenCorreo + "\n" + // Lita resmuen ...   
                       "Total a pagar: $$total\n" + // mMath  
                       "Método de pago: $metodoPago\n\n" + // cmo  
                       "Usuario que rentó: $userEmail" // QUIne corree...  MANDA GIGANTE  "BODY """  

            val intent = Intent(Intent.ACTION_SENDTO).apply { // CREA TRAMPOLIN MAGICO INTENT "QUIERO MANDAR UN MAIL! AL SO ANDOID!      
                data = Uri.parse("mailto:") // DEletrado "mailto:" Activa LAs appes de Corro gmaial outlook  solista mgiacament.. 
                putExtra(Intent.EXTRA_EMAIL, arrayOf(userEmail, adminEmail)) // ARray A Quien ? A mi rata mksmo  , y l adim de arruiba copias   cc . 
                putExtra(Intent.EXTRA_SUBJECT, "Confirmación de Renta #${orderId.take(6).uppercase()}") // TITULO CORROE " Ticek #45fFS " (Corta al pedadoz FEO UUID hash e no gignatee s .    ) 
                putExtra(Intent.EXTRA_TEXT, body) // ELCuepriote concatanedo gignATE  !!     
            } // FI intent builder 
            try { // Pruba 
                activity?.startActivity(Intent.createChooser(intent, "Enviar confirmación por correo")) // ABRE E L PUTO MENUA NDROID NATIVO DE : (SENDER WITH ;  GMAIL? OUTLOOK? Yhaoo? ) Y MANDA !! CArganod DATOSS      
            } catch (e: Exception) { // fS i falla , si neiln tinee app de coreoo  instalada en u cel   . crachealo   
                // Ignorar si no hay aplicación de correo // d ev  
            } // CATCH silenciossisissismo  (NO Hagas nada , no molestes e ignore fail coreo fail ) .          

        }.addOnFailureListener { e -> // ESTO FUE CUNADO EL "ROOL BANK TRANSTACTIONS LEYO !  (Fallo ! No se pudo! FAltaron SIllas! ERROR DB! )      
            Toast.makeText(requireContext(), "Error en el pedido: ${e.message}", Toast.LENGTH_LONG).show() // REGAÑO TRAS CAGA DE DB RED "Noh ay stik bro "     
            binding.btnFinalizarRenta.isEnabled = true // Y COMO FALLASTE... ENTONCES TE VUELVO A PRENDER EL BOTON PARA QUE REINTETES O CHEQUES TU RED PINCHE USUARIO BRO ! BYE .       
        } // end fin catch fallo trrnssacc. n
    } // END FI FUNCION MAESTRO REINA DE TODA LA APP MASTER ATOMICA PROCESS RENTES COMPRA !!      

    /**
     * Escribe un documento en la colección "notificaciones" de Firestore.
     * El listener en MainActivity / AdminMainActivity lo leerá y mostrará la notif local.
     */
    private fun enviarNotificacionFirestore( // utilri db wirter short 
        paraRol: String?, // aqune Rol ADMIN 
        paraUserId: String?, // q id ID 
        titulo: String, // ltle  
        cuerpo: String // badu 
    ) { // functi n iin i    
        val notif = hashMapOf( // BUil Hash MAp jsno directito e     
            "paraRol" to paraRol, // map argr   
            "paraUserId" to paraUserId, // magrg r  
            "titulo" to titulo, // map iatle 
            "cuerpo" to cuerpo, // mpabou fdy 
            "leido" to false, // FLag leido? obioo NO FALSO , aacba de ncaer. 
            "timestamp" to System.currentTimeMillis() // hroa actua  epoc 
        ) // df ison noii biler    
        db.collection("notificaciones").add(notif) // BDD TIra el HASH JSON de gOLPE a la Tbal " notifcasnio" en elc ielo FIretoro... (Y deha que los listenrs vivos la ahtrapntn lso dEMAS CELLAREAS  ADMINS  WEYS .)       
    } // fi fuciot ns db noiif


    override fun onDestroyView() { // MAtador fragment memoria  
        super.onDestroyView() // call so   
        _binding = null  // Purga memory leak  del Inflated pointer UI   
    } // ends overriding killer so.    
} // FInal class Confirmacion CHecks   fin

```  }.addOnFailureListener { e ->
            Toast.makeText(requireContext(), "Error en el pedido: ${e.message}", Toast.LENGTH_LONG).show()
            binding.btnFinalizarRenta.isEnabled = true
        }
    }

    /**
     * Escribe un documento en la colección "notificaciones" de Firestore.
     * El listener en MainActivity / AdminMainActivity lo leerá y mostrará la notif local.
     */
    private f```kotlin
package com.tuempresa.rentaapp.ui.user // Vistas principales del Ciente  

import com.tuempresa.rentaapp.R // Recursos XML 
import com.tuempresa.rentaapp.models.Producto // Molde Caja Carrito 
import com.tuempresa.rentaapp.ui.common.PerfilFragment // Fragmento Hibrido Compartido Settings Cuenta 
import com.tuempresa.rentaapp.utils.NotificationHelper // Helper Inyector de Campanitas OS Local   

import android.os.Bundle // Intercambio OS estados  
import androidx.appcompat.app.AppCompatActivity // Activity Master UI Controller Cnvvas Padre  
import com.google.android.material.bottomnavigation.BottomNavigationView // Material Design Barra Inferor Navegacion  UI 
import com.google.firebase.auth.FirebaseAuth // Acceso tokens gogoel 
import com.google.firebase.firestore.FirebaseFirestore // Nube BD Json
import com.google.firebase.firestore.ListenerRegistration // Tuberia Vva para Cortar Escucha Sockets

class MainActivity : AppCompatActivity() { // ACTIVIDAD MAESTRA ( CONTENEDOR VIVO DEL CLIENTE )

    var totalGeneral: Double = 0.0 // VARIABLE GLOBAL RAM MUTABLE: "CUNTO TNEGO ELN ELC ARRO?? "   

    private val db = FirebaseFirestore.getInstance() // INSTANCIA BDD NUBE FIRESTR 
    private val auth = FirebaseAuth.getInstance() // INSTNCIA LOGER TOKEN
    private var notifListener: ListenerRegistration? = null // PUNTERO A MATAR TUBERIA SOCKET DE CAMPANAS NOTIFIC.

    override fun onCreate(savedInstanceState: Bundle?) { // CICLO ANDORID 1 START APP UI AL ABRIR EL APP
        super.onCreate(savedInstanceState)  // INIT OS CORE  
        setContentView(R.layout.activity_main) // PINTA EL CONTENEDOR XML MAEESTRO CON LA BARRITA ABAJO 

        NotificationHelper.createChannel(this) // CREA UN "CANAL" EN ANDROID OS 9+ PARA PODER MANDAR CAMPANITAS AL CELULAR . INDISPENSABLE . 

        // Cargar fragment inicial // Dev  
        if (savedInstanceState == null) { // Si apneas aRRNCA   
            supportFragmentManager.beginTransaction() // Pidele Al inyectro 
                .replace(R.id.contenedor_fragmentos, CatalogoFragment()) // Que INYECTE el CATALOO DE MUEBLES (tienda) de Trancazo al abrir .     
                .commit() // DOne! 
        } // fn inflae innit    

        val bottomNav = findViewById<BottomNavigationView>(R.id.bottom_navigation) // PUNTERO A : La BArrita con icnonso de abjao Navba.r   
        bottomNav.setOnItemSelectedListener { item -> // CUANDO LE PIQUEN CON EL DE DE DO :  CUAL APRETO ???   
            val fragment = when (item.itemId) { // DETECTIVE  
                R.id.nav_catalogo -> CatalogoFragment() // PICÓ "TIEnda!" -> INSTANCIA NUEBO FRAGMENT TIENDA! 
                R.id.nav_rentas -> RentasFragment() // PICO "MIS PEDIOS" =>  INSTANCIA FRAGNMNT "MIS TICKETS!"  
                R.id.nav_notificaciones -> com.tuempresa.rentaapp.ui.common.NotificacionesFragment() // Pico CAmpanita =  Trae las Ntiiciconese  
                R.id.nav_perfil -> PerfilFragment() // Pico Mi Cuenta => Carga Settings UI  
                else -> null // Idunno fail .  
            } // Fn in wjen  
            fragment?.let { // SI lograste encontrar y CREar el frangmenhto paps : 
                supportFragmentManager.beginTransaction() // INYector OS  
                    .replace(R.id.contenedor_fragmentos, it) // REEPLAZA EL BLANCO PRICNIPAL POR EL NUEVO FRAGMENT!! TRANSCIION FLUIDA SIN APAGAR PANTALLA !       
                    .commit() // DONE OS    
            } // FI UI iNEJCOIN dINAMICA
            true // SELECCION EXITSOA   
        } // Fin Litener de botoncitos nav 

        // Escuchar notificaciones de Firestore dirigidas a este usuario  // Dve 
        escucharNotificaciones() // Fucnion MAGICA Tuberría Viva de CAMPANITAS PUSH!!!.        
    } // End On Creat Vvviws uis OS  

    private fun escucharNotificaciones() { // LANZADOR MAESTRO DE SOCKET VIVO ESPPIA:  
        val userId = auth.currentUser?.uid ?: return // PIDE MI ID MIO DE MI RATA. 

        notifListener = db.collection("notificaciones") // PUNTERTO A LA TABLA "notificaciones" n la neube    
            .whereEqualTo("paraUserId", userId) // FILTRO :  SOLO DAME DONDE VENGA MI NOMBRE !! MI PUTO ID !!   (No quiero laS del Duyeño!)        
            .whereEqualTo("leido", false) // FILTRO 2: SOLOT TTRAEME LAS NUUVAES FRESCAS QUE DIGAN QUE NO HE LEIDO "False".    
            .addSnapshotListener { snapshot, e -> // CONECTA EL TUBO EN VIVO !! (SI el DUENIño ALLA EN SU COMPU LE DA UN BOTONAZA , A MI ME LLEGA EN ESTE MII SEGUNDO AQU!! )          
                if (e != null || snapshot == null) return@addSnapshotListener // FAio iinterntot . cCallaye bro 
                for (doc in snapshot.documents) { // iTERA LO NUEVO FRESCO NO LEIDO  BABDADO  
                    val titulo = doc.getString("titulo") ?: "Notificación" // SACAE TITUO ,   o Pon GEenrico     
                    val cuerpo = doc.getString("cuerpo") ?: "" // SKACAE LCUEO oVascio 
                    NotificationHelper.mostrar(this, titulo, cuerpo) // MAGHIA: DILE LA ANDOID NATIVO JAVA QIE HAGHA UNA NOTIFICACION "DLINGH!" EN ELA APANTALLA NOTIYB BAR! . !!      
                    // Marcar como leído para no volver a mostrarlo // Dv .  
                    doc.reference.update("leido", true) // Y PA QUE NO ME ANDE CHINGADNDO CADA RATO, DILE AA LA BBDD (UPDATE TRUE) QUE YA LA LEÍ PAPI . YAAAA. !!    
                } // FI  loopp notisis iid 
            } // Fi SOcket alive.  
    } // edn mactio n 

    override fun onDestroy() { // MATADO R DE APP CIERE SO TRAMPOLIN    
        super.onDestroy() // CAll so destor   
        notifListener?.remove() // CORTA EL CABLE DEL SOCKET EN VIVO DE INTERNET O CHUPPPAAAARAs BATERAIA!!     
    } // iFn  CAllbak desotyro

    fun irConfirmacion(productosSeleccionados: List<Producto>) { // MAGICO TRAMPOLIN : (INVOCAGO POR MI HIJO FRAGMENTO CUANDO LE PICCAN PAGAR! ! )    
        val fragment = ConfirmacionFragment() // cREA EL PAPA MAINETy lala apantalal de "CONFIRMACION " (La del ticcket!)      
        val bundle = Bundle() // CRea UN PAQUETE SECRETO (Arguments bunlde )      
        bundle.putSerializable("productos", ArrayList(productosSeleccionados)) // MEnteL LA LISTA DE COMPRARS RAM DENTRO DEL PAUQEITO!     
        fragment.arguments = bundle // DILE AL NUEVO FRAGMENTO "TOMA NIÑO , TE PASO LOS DATOS EN LA BOCA DEL CARRITO!! "     

        supportFragmentManager.beginTransaction() // INYectotr   
            .replace(R.id.contenedor_fragmentos, fragment) // PARCHEARA LA PANTALL POR EL NUEVO FORMUDLARIO    
            .addToBackStack(null) // Y AGREGALO A LA PILA (PARA QEU SI LE DA AL BOTON FISIC DE "ATRÁS " ANDIRIOD DE SU CELULAR... REGRESE A LA TTIEENDA CHIDO !!!      
            .commit() // Dnoe 
    } // ed trampiolin inyecgtrio 

    fun actualizarTotal(lista: List<Producto>) { // MAtth Callbak padre     
        totalGeneral = lista.sumOf { it.furniture.precio * it.cantidadSeleccionada } // Loop sumatory x math. 
    } // fn mtuhs 

    fun limpiarCarrito() { // Vasiado   
        totalGeneral = 0.0 // reset a cro prro  
    } // fnn  fnci 
} // E dn Calsa main Activiiity clienta appo fin  

```doc.getString("cuerpo") ?: ""
                    NotificationHelper.mostrar(this, titulo, cuerpo)
                    // Marcar como leído para no volver a mostrarlo
                    doc.reference.update("leido", true)
                }
            }
    }

    override fun onDestroy() {
        super.onDestroy()
        notifListener?.remove()
    }

    fun irConfirmacion(productosSeleccionados: List<Producto```kotlin
package com.tuempresa.rentaapp.ui.user // CArpeta publoca  cliente vistas  

import com.tuempresa.rentaapp.adapters.PedidoAdapter // Listador Render de HIstorial Tickets  

import android.app.AlertDialog // POPUP Modal OS Nativo "stas seguro? "    
import android.os.Bundle // Intercambios etstao s OS 
import android.view.LayoutInflater // XML a Canvas OS  bview 
import android.view.View // Caja vista basica  
import android.view.ViewGroup // PArent Caja Layouts  
import android.widget.Toast // Feedback boxs negras chiatias 
import androidx.fragment.app.Fragment // Master classs OS Molde recilcable    
import androidx.recyclerview.widget.LinearLayoutManager // SO SCROLLER VERTICAL Infinito   
import com.tuempresa.rentaapp.databinding.FragmentRentasBinding // KOtliun inyetcor de Idx  xml ui
import com.google.firebase.auth.FirebaseAuth // TOkens id login 
import com.google.firebase.firestore.FirebaseFirestore // Bd JSON nub ee  
import com.google.firebase.firestore.Query // Filtro de bd 
import com.tuempresa.rentaapp.R // Rerucsoss idc
import com.tuempresa.rentaapp.models.OrderStatus // ENUM STados de pedidod Pendinte Atgico Canceledo !!   
import com.tuempresa.rentaapp.models.RentalOrder // Molde MAster JSON Tikcteta  

class RentasFragment : Fragment() { // CLase : HISTORIAL DE MIS TICKETS DE RENTAS    

    private var _binding: FragmentRentasBinding? = null // Puntaor ui null 
    private val binding get() = _binding!! // getter rpaiiod 

    private val db = FirebaseFirestore.getInstance() // bbdd ineta  
    private val auth = FirebaseAuth.getInstance() // tokner id

    private lateinit var adapter: PedidoAdapter // Traductor Iterador Pintador de Cuadritos Visuales UI RECICCERVEWR      
    private var listaPedidos = mutableListOf<RentalOrder>() // RAM "LISTA VISIBLE ACTUALMENTE " PARA EL ADAPTER    
    private var allPedidos = mutableListOf<RentalOrder>() // RAM "MASTER LISTA" TODOS MIS PEDIDOS BAJADOS DEL CIELO RED .    
    private var nombresMobiliarioCache = mutableMapOf<String, String>() // SUPER CACHE RAM MAGICO MAP: " Id23r243 -> Silla " "Idfds44 -> Mesa" PARA NO CHINGAR A LA BBDD  MULLTIPLES VECES  CON STRINGS !!!         
    private var mostrarHistorial = false // TOOGLE RAM BANDERA : Estoy vieendo ACtuvs? Oo Viejos Archivador Finalizados ? 

    override fun onCreateView( //  CICLO 1 INFLA  Y PINTA UI XML  CANVAS  
        inflater: LayoutInflater, container: ViewGroup?, // tools 
        savedInstanceState: Bundle? // stetes
    ): View { // red turn caas s
        _binding = FragmentRentasBinding.inflate(inflater, container, false) // nfla basic  vla 
        return binding.root // enseño patnall al usr     
    } // edn view crat e  

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) { // CICLO 2 CONECTA LOGICA Y BOTONES !!     
        super.onViewCreated(view, savedInstanceState) // CALL o s. 

        adapter = PedidoAdapter( // instyacion EL PINTOR TRUCTRU Creado de Tickets Visuales ... 
            pedidos = listaPedidos, // LE pso la LISTA RAM basica a Pintar.. 
            esAdmin = false, // LE DIGO AL ADAPTER "EY ERES EL ADAPTER DEL CLIENTEE RATA, MO MUESTRES LOS BOTONES DE APROBAR PAPIII!" !!!     
            onCustomerEliminar = { pedido -> // LAmba qeu VIENE DESDE ALLLA ADENTRO DEL BOTON DE LA CELDA...     
                confirmarEliminarPedido(pedido) // Invocame Popuo nativo 
            }, // fn cll delete   
            onCustomerModificar = { pedido -> // lambda desde la cenda  Aeditat     
                modificarFechasPedido(pedido) // Ivoca logica de Calendar is 
            }, // fn call edi t dades  
            onCustomerArchivar = { pedido -> // Lamda dsede celld arhcve btn    
                archivarPedido(pedido) // isvnoc ap iden fns  achveid   
            } // fd idv   
        ) // done buile r adapter    

        binding.rvMisRentas.layoutManager = LinearLayoutManager(context) // Carga el MODO Lista infinitoa VETIICAL PARA BAJO SO   
        binding.rvMisRentas.adapter = adapter // ENCAJA EL TRADUCROTR EN LA VISTA XML !!! CONECTADOS !!!   

        binding.toggleGroupRentas.addOnButtonCheckedListener { _, checkedId, isChecked -> // LISTENER DEL GRUPOS DE BOTONES SUPERIOR (MIS RENTSA! --- HISTORIAL !!  ) 
            if (isChecked) { // si pico uoo    
                mostrarHistorial = checkedId == R.id.btnHistorial // SETEA BANDRERA MAGHIA TURE O FLASO DEPENDIENTO Q UQ BOTON FUE :   Vienjod s??     
                actualizarListaFiltrada() // EJECUTA EL FILTRADOR LOCAL MAGICO (SIN ITRNERNET!! ) PA CAMBIAR DE PESTAÑA A LA VELOCIDAD DE LA LUZ .     
            } // fin ck check edd i   
        } // fil oggle lostner e  

        cargarNombresMobiliario { // LANAZA LA LAMNDA #1 DE RESD "Ptraet TDOOS los nombredS del caatañog , cuendo tremines....  "   
            cargarMisPedidos() // LAABDA CALLBACK RED #2 "AHORA SII BAaja mism ticckets... Y usa el Cache para decodificcar los IdSs Caca   " !     
        } // fin call baks annidaods. 
    } // dn DOM VIEw created 

    private fun cargarNombresMobiliario(onComplete: () -> Unit) { // BDD CLOUD READER INVENTARIO MASTER IDS      
        db.collection("mobiliario").get().addOnSuccessListener { snapshot -> // TRAETe TDOOOOO EL CATALOG DEL DUEÑO NO MAMESS DE GOLPEEE   
            for (doc in snapshot.documents) { // BUcle   
                val nombre = doc.getString("nombreProducto") ?: "" // llee ssoloel nromber chido   (silla_  
                nombresMobiliarioCache[doc.id] = nombre // GUARADLO EN LA RAM HASHMAP CACHEEE !!  ( 34242j3kj43 -> SIla) . .    
            } // fin blc 
            onComplete() // Dispara la funccion asicnorona padree ! Termine !! Ciontinuee usntedes  ...  
        }.addOnFailureListener { // SO erro r de rd ?     
            onComplete() // Tiemineee mla peroo ontinueen   avanznado code flow   .. 
        } // catch rd 
    } // ednd load names hcade c 

    private fun cargarMisPedidos() { // TUBERI RED A BDD C LOUD VIVVVAA TICKTES     
        val uid = auth.currentUser?.uid ?: return // q iuen shy tockenr  id   

        db.collection("rentas") // apunrt aTICKETS "rents"  
            .whereEqualTo("userId", uid) // FILITRO : DAM E SOLO MS PUTOS REICVBOS , NO LO DS DE TTDO MUNDO !!!      
            // Firebase requiere índice compuesto para where + orderBy. Lo evitamos ordenando localmente por ahora. // dev ops . 
            .addSnapshotListener { snapshot, e -> // CONECTA TUBERIA VIVVVAAAA !!    
                if (e != null) { // Fallor tuvier  
                    Toast.makeText(context, "Error cargando tus rentas", Toast.LENGTH_SHORT).show() // ragae  
                    return@addSnapshotListener // aobtra  
                } // fi if fall 

                if (snapshot != null) { // dAtos vieinron biene   
                    allPedidos.clear() // Vacio MI LISTA MAESTRA  RAM . TDO TDO TDO A CERO     
                    for (doc in snapshot.documents) { // BUcle d JONDS recios tickets !    
                        val pedidoOriginal = doc.toObject(RentalOrder::class.java) // CNoverite de Json a Kotli in master object Molde rnteals is 
                        if (pedidoOriginal != null) { // Valuida cino s   es biuen     o
                            val itemsActualizados = pedidoOriginal.items.map { item -> // Iteea CAda Itemcintooo lgeiitro basrua ("silla - 213dsss - $3")   
                                if (item.furnitureName.isEmpty() && nombresMobiliarioCache.containsKey(item.furnitureId)) { // Si No TRAE nomobre pordue fue crado muy lijero? ...    
                                    item.copy(furnitureName = nombresMobiliarioCache[item.furnitureId]!!) // MAGIA : HAZ UNA COPIA DL ITEEMM LIGERO , PERO INYECTALE EL VEDADER NOMOBE LEIDO DESDE MI RAM SUPER CACHE DE ARRIBAA!!!!    "3S2ES3-> SILLA".         
                                } else { // Sia Ttiae nobner orgniall   
                                    item // dEJaalo mo comoe tas broo  
                                } // fn n map trn  
                            } // finde la trannsor maci i n mpaer      
                            val pedido = pedidoOriginal.copy(items = itemsActualizados) // CRra COPIA NUVEO DEl tickeet original ... PEor o  COLOcanole ls itetems YAAACTUALZADOS CON NOMMBRRZSSS CHIDOS !!     
                            allPedidos.add(pedido) // GUARDALO GORDITOOO EN LA LISTAMASTTERA ALLPEDIO  RAM !!       
                        } // fin tran f
                    } // fo n d  vucle itear   
                    actualizarListaFiltrada() // LLAM A  F C MAGHIA UI FILTROS .      
                } // fs na c dat  re 
            } // fi  nn shnot i in  liv e
    } // dn  f reader bd tict  

    private fun actualizarListaFiltrada() { // LOGICA PESTAÑEADO UI CERO LAGGGG (SIN RED )     
        listaPedidos.clear() // lioipo m lista visual ram cortita ..    
        for (pedido in allPedidos) { // ITEeRO LA GIGANTA CACA  ALL DPDEIDS MASTAR LIST RAM   
            if (pedido.archivedByCustomer) continue // SI EL USAURIO LE PICO "ARCHBAR A EST TKT.. p ues brcinacteoal ignorallao co ntinee "  " !!    
            
            val esFinalizado = pedido.status == OrderStatus.RETURNED || pedido.status == OrderStatus.CANCELLED // MAGI: "ESte ticket es viejo? ? " SI , si el edstado es ya "Develtuy " o "Ccnaldeao"     
            if (mostrarHistorial == esFinalizado) { // MAGIA CONDICION BOOLEAN : Si LA BANDERITA DEL TOOGLE COINCIDE CON  EL ESTADO  (Viejos == Visjos )  O  (AVTIVOS == Actiuvos )..      
                listaPedidos.add(pedido) // AGREGALO A LA CAJA PQUEA RAM VISUAL DE PAANTALLA RECDDYCER VIEVV  !     !       
            } // in fi m atchs boolean      
        } // infn vluoe ierae log ica master l  
        listaPedidos.sortByDescending { it.deliveryDate } // ORDENAMIENTO FECHAS DESCENDNEET : LAS MAs NUEVCA ACABO De COOMAPRR  HASTA ARRIBA DEL  RECCCCYLER VIE WW WWW !! !!        
        adapter.actualizarLista(listaPedidos) // "EY ADAPTER, TOMA LA CAJA, YA LA FILTRÉ YO, Y VUELVE A PINTAR CUADROS YAAA. !!!"        
    } // find d fun filtrs 

    private fun confirmarEliminarPedido(pedido: RentalOrder) { // POPUO NATIIVO DE L SO ALERTA SEGURAID CRITIICA        
        AlertDialog.Builder(requireContext()) // LAAZA CONSTRUCTR POPU OPB SO JA VA O L DO S         
            .setTitle("Eliminar Pedido") // title   
            .setMessage("¿Estás seguro que deseas eliminar el pedido #${pedido.id.take(6).uppercase()}?\nEsta acción cancelará la orden y no se puede deshacer.") // Body advrrteci  y formates uuisid id       
            .setPositiveButton("Sí, eliminar") { _, _ -> // Bton o rojo s isis i     
                eliminarPedidoConStock(pedido) // Sii le d a a s si : LLama Funcion MAestra ATomica Delet T Rnsacion         
            } // fn in d postit v bu  n 
            .setNegativeButton("Cerrar", null) // Bton Cannel no ahagas nada so null    
            .show() // enserñalo pa la panrtalal as 
    } // end poup u  la cuenr alert  buiel 

    private fun eliminarPedidoConStock(pedido: RentalOrder) { // FUNCION ATOMIDA MEGA CRIITCA : CANCELAR MIO VENTA Y REREGSAR MUEBRESLS ALA DB !! !!      
        db.runTransaction { transaction -> // INICIA UNA "TRANSACCION DE LA  NUBE BB D ". ESTO ES UN TODO O NADA! AL PRIMER FALLO DA REVERSA !!   
            // FASE 1: Lecturas  // De c v     
            val snapshots = pedido.items.map { cartItem -> // aGarra el arrito q eu habia yo cmpraado . y mapesalo. :        
                val docRef = db.collection("mobiliario").document(cartItem.furnitureId) // Hza pinternos  HAaci e lc a tlatogo r lde muble global db !        
                Pair(cartItem, transaction.get(docRef)) // LECTURA VIVA SNAPOSHAT LIVE DE RED CUNAOTS MUEBESLH HA Y A HORITA ? Y EMARJAEO CO CPN i IETM  A !      
            } // fi  readers m map  n a t s 

            // FASE 2: Escrituras // de o vv   
            snapshots.forEach { (cartItem, snapshot) -> // ITEra l a respuoaset viv viva s d db ..    
                if (snapshot.exists()) { // SEii aun siiste en al fz ed la trer el mu vlb ei t a...!! ?       
                    val stockActual = snapshot.getLong("existencia") ?: 0 // sACALE EL CTOKC ACTUAL HOYW VIEVWO DB DB  !!!       
                    val docRef = db.collection("mobiliario").document(cartItem.furnitureId) // punter e al mubeb le   
                    transaction.update(docRef, "existencia", stockActual + cartItem.quantity) // MEGA ESCERITURA ATOMICA BACK DB : SUMALE AL STKOC (+) LO QE U NO COMPRÉ E Y LO RETRGRESTS AS !! ( REGErsa LAS SiooAL AL NTIENDA !! )) ))                
                } // i n fie isitss snap 
            } // fn is rciutuurs a   update i nventioo ar  o 

            // Eliminar el documento de la renta // c dev   
            val orderRef = db.collection("rentas").document(pedido.id) // Punetore al tticke t id .  
            transaction.delete(orderRef) // MATAT MATO BORRA DEELET DEL TABALAA BD EN LA VUUVE ! FIREBAE BYBE BE !!    
            null // RETUDNR KOTLI NO NU L  SO T R NAC TION . S A TIFACCO TN DOON E!!       
        }.addOnSuccessListener { // VOLVOMIS DEL ITNNERNT! AL TOMEI E EXITO!!           
            Toast.makeText(context, "Pedido eliminado exitosamente", Toast.LENGTH_SHORT).show() // REsGAÑO FEBBACK VERDE FUXCION NO !          
        }.addOnFailureListener { e -> // CHCOCAMOS !! ERRO RDE REE DB NO PUDOO SE REVErtriio TOO !!          
            Toast.makeText(context, "Error al eliminar: ${e.message}", Toast.LENGTH_LONG).show() // ragae roro db feebacxk           
        } // fin fd nc ato imca transciatnt aio  n l s db        
    } // fend cn

    private fun modificarFechasPedido(pedido: RentalOrder) { // EICITN DE UI FECHAS     
        // Pedir nueva fecha de entrega // d o vc 
        mostrarDatePicker("Selecciona la nueva fecha de ENTREGA", pedido.deliveryDate) { nuevaEntregaMs -> // PPUP CALL CAB K  S1
            // Pedir nueva fecha de devolución // db      
            mostrarDatePicker("Selecciona la nueva fecha de DEVOLUCIÓN", pedido.returnDate) { nuevaDevolucionMs -> // PP UP O CALL BKC A  S   2 
                if (nuevaDevolucionMs < nuevaEntregaMs) { // VIAJAR Al PSADSAD ?? !    
                    Toast.makeText(requireContext(), "La fecha de devolución debe ser mayor o igual a la de entrega", Toast.LENGTH_LONG).show() // REGAO N ERROR FFSI IA 
                    return@mostrarDatePicker // abort aborto pop u !  
                } // fi if a  d v i li do dt s e a 

                // Actualizar en Firestore   // de bb      r  a
                db.collection("rentas").document(pedido.id) // APTURA L I TD EC T   bd nu v 
                    .update( // ECSciribi update l  ig e or n am a l ss caampoa spseciffi os   
                        mapOf( // Maepo jsoon d s    a
                            "deliveryDate" to nuevaEntregaMs, // NUva a de  et e grar e     
                            "returnDate" to nuevaDevolucionMs // nbva aa d v ou in a d 
                        ) // fna ia p      json
                    ) // a a d d b o a e 
                    .addOnSuccessListener { // b d red succ c   a e s    a 
                        Toast.makeText(requireContext(), "Fechas actualizadas correctamente", Toast.LENGTH_SHORT).show() // fg cee t b k i a     e g 
                    } // fa l i v db f a e s  s
                    .addOnFailureListener { e -> // r red c n er e or v     g d a s 
                        Toast.makeText(requireContext(), "Error al actualizar fechas: ${e.message}", Toast.LENGTH_LONG).show() // a v ro a i e g r     i f g  e
                    } // i o a o   f n 
            } // r p c p a d d 
        } // r  p a  a d  l o y
    } // a a a y r d f 

    private fun mostrarDatePicker(titulo: String, fechaInicial: Long, onDateSelected: (Long) -> Unit) { // CALENDAIRO UTIERLIA NATVIA   v     a v 
        val c = java.util.Calendar.getInstance() // Java old ecalndearo no w 
        if (fechaInicial > 0) { // Sii mnadaar faha iicinal ?   
            c.timeInMillis = fechaInicial // Po lcelandar ahrn a es af e cah a e     
        } // d v g u     i v t
        val year = c.get(java.util.Calendar.YEAR) // ath an ro   o a 
        val month = c.get(java.util.Calendar.MONTH) // s v me so m r s     h 
        val day = c.get(java.util.Calendar.DAY_OF_MONTH) // r     s d  ia     y  y     a i      

        val dpd = android.app.DatePickerDialog(requireContext(), { _, y, m, d -> // Lnaxda el ccadlenria b caca adnnn   oo e rr     i d a     a m
            val sel = java.util.Calendar.getInstance() // al l iig err no a  s   
            sel.set(y, m, d) // steteeer as s de a w u ui a is u    s er 
            onDateSelected(sel.timeInMillis) // labmmbdaa caal b b cakk devule vel ep a e epcoh milils ss  v c 
        }, year, month, day) // s h   f u e e   w e w

        dpd.setTitle(titulo) // ETTETITO AARIBBA D L EL LCP OOP C A   
        dpd.datePicker.minDate = System.currentTimeMillis() - 1000 // BR L CQU EA LSO DIIS S VIEJOSS PAASAOS I AA IA Y RE R S    N   S    A S     M      !!!  
        dpd.show() // v is s w h i ui v a   o
    } // s n r y f   s n o m     u d t e

    private fun archivarPedido(pedido: RentalOrder) { // FUCNIN ARCIVO GOSHT R     R E     M         A
        db.collection("rentas").document(pedido.id) // Pu tn t rr ro I DT  IK CTE E         B
            .update("archivedByCustomer", true) // B DDUP AD DT E FI F AL G R   F ALS E   - > TUR   U E ! !                 
            .addOnSuccessListener { // f l ed f  l         g  t 
                Toast.makeText(context, "Registro eliminado exitosamente", Toast.LENGTH_SHORT).show() // g d a d        b s a h
                // SnapshotListener se encargará de actualizar la lista y remover el item // c s u b  c    q a c
            } // b u a s o  c
            .addOnFailureListener { e -> // q l ro b
                Toast.makeText(context, "Error al archivar: ${e.message}", Toast.LENGTH_SHORT).show() // u l r 
            } // j  p u l i     n  a  c        e w q     e  e  t v v v v        y w q r       
    } // p t l v c       n      t

    override fun onDestroyView() { // mm t o d f f e k c
        super.onDestroyView() // cc b s r a o f w g c     n i
        _binding = null // f b e r b i  m  f  a  y d y
    } // w  r w      h   s
} // e     r n d     s h   c n

```  val dpd = android.app.DatePickerDialog(requireContext(), { _, y, m, d ->
            val sel = java.util.Calendar.getInstance()
            sel.set(y, m, d)
            onDateSelected(sel.timeInMillis)
        }, year, month, day)

        dpd.setTitle(titulo)
        dpd.datePicker.minDate = System.currentTimeMillis() - 1000
        dpd.show()
    }

    private fun archivarPedido(pedido: RentalOrder) {
        db.collection("rentas").document(pedido.id)
            .update("archivedByCustomer", true)
            .addOnSuccessListener {
                Toast.makeText(context, "Registro eliminado exitosamente", Toast.LENGTH_SHORT).show()
                // SnapshotListener se encargará de actualizar la lista y remover el item
            }
            .addOnFailureListener { e ->
                Toast.makeText(context, "Error al archivar: ${e.message}", Toast.LENGTH_SHORT).show()
            }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}

```

---

<a id='javacomtuempresarentaapputilsNotificationHelperkt'></a>
### Archivo: `java/com/tuempresa/rentaapp/utils/NotificationHelper.kt`

**Propósito general:** Archivos y ayudantes (helpers) de utilidad general. Por ejemplo, cosas que se usan en varias partes de la app, como el sistema para mostrar notificaciones locales en el teléfono.

#### Código fuente completo:

```kotlin
            }
            val manager = context.getSystemService(Context.NOTIFICATIO```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Definición estándar de archivo XML con codificación UTF-8 -->
<vector xmlns:android="http://schemas.android.com/apk/res/android" <!-- Elemento raíz 'vector' para dibujar gráficos vectoriales escalables en Android -->
    android:width="108dp" <!-- Ancho intrínseco del gráfico (108 píxeles independientes de la densidad). Tamaño estándar para iconos adaptativos -->
    android:height="108dp" <!-- Alto intrínseco del gráfico (108 píxeles independientes de la densidad) -->
    android:viewportWidth="108" <!-- Ancho del lienzo (viewport) virtual donde se dibujarán los trazados (rutas) -->
    android:viewportHeight="108"> <!-- Alto del lienzo virtual -->
    
    <path <!-- Primer elemento 'path' (trazado). Dibuja el fondo sólido verde -->
        android:fillColor="#3DDC84" <!-- Color de relleno para este trazado (Verde Android clásico) -->
        android:pathData="M0,0h108v108h-108z" /> <!-- Datos del trazado: M0,0 (Mover a origen), h108 (línea horizontal longitud 108), v108 (línea vertical longitud 108), h-108 (línea horizontal a izquierda 108), z (cerrar forma). Crea un cuadrado de 108x108 -->
        
    <path <!-- Segundo trazado. Comienza a dibujar las líneas de la cuadrícula (grid) de fondo -->
        android:fillColor="#00000000" <!-- Color de relleno transparente (solo nos interesa el borde/línea) -->
        android:pathData="M9,0L9,108" <!-- Dibuja línea vertical: Mueve a (x=9, y=0), Traza línea (L) hasta (x=9, y=108) -->
        android:strokeWidth="0.8" <!-- Grosor de la línea delgada -->
        android:strokeColor="#33FFFFFF" /> <!-- Color de la línea: Blanco semi-transparente (alfa 33 Hex = ~20%) -->
        
    <path <!-- Tercer trazado (grid) -->
        android:fillColor="#00000000" <!-- Relleno transparente -->
        android:pathData="M19,0L19,108" <!-- Línea vertical en X=19 -->
        android:strokeWidth="0.8" <!-- Grosor fino -->
        android:strokeColor="#33FFFFFF" /> <!-- Blanco tenue -->
        
    <path <!-- Cuarto trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M29,0L29,108" <!-- Línea vertical en X=29 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Quinto trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M39,0L39,108" <!-- Línea vertical en X=39 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Sexto trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M49,0L49,108" <!-- Línea vertical en X=49 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Séptimo trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M59,0L59,108" <!-- Línea vertical en X=59 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Octavo trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M69,0L69,108" <!-- Línea vertical en X=69 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Noveno trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M79,0L79,108" <!-- Línea vertical en X=79 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Décimo trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M89,0L89,108" <!-- Línea vertical en X=89 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Undécimo trazado (grid) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M99,0L99,108" <!-- Línea vertical en X=99 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Duodécimo trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,9L108,9" <!-- Línea horizontal: de (0,9) a (108,9) -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimotercer trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,19L108,19" <!-- Línea horizontal en Y=19 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimocuarto trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,29L108,29" <!-- Línea horizontal en Y=29 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimoquinto trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,39L108,39" <!-- Línea horizontal en Y=39 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimosexto trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,49L108,49" <!-- Línea horizontal en Y=49 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimoséptimo trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,59L108,59" <!-- Línea horizontal en Y=59 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimoctavo trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,69L108,69" <!-- Línea horizontal en Y=69 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Decimonoveno trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,79L108,79" <!-- Línea horizontal en Y=79 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Vigésimo trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,89L108,89" <!-- Línea horizontal en Y=89 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Vigésimo primer trazado (grid horizontal) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M0,99L108,99" <!-- Línea horizontal en Y=99 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado de cruz central o márgenes internos (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,29L89,29" <!-- Línea horizontal corta: (19,29) a (89,29) -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,39L89,39" <!-- Línea horizontal corta en Y=39 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,49L89,49" <!-- Línea horizontal corta en Y=49 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,59L89,59" <!-- Línea horizontal corta en Y=59 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,69L89,69" <!-- Línea horizontal corta en Y=69 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M19,79L89,79" <!-- Línea horizontal corta en Y=79 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M29,19L29,89" <!-- Línea vertical corta: (29,19) a (29,89) -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M39,19L39,89" <!-- Línea vertical corta en X=39 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M49,19L49,89" <!-- Línea vertical corta en X=49 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M59,19L59,89" <!-- Línea vertical corta en X=59 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M69,19L69,89" <!-- Línea vertical corta en X=69 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color -->
        
    <path <!-- Trazado (grid parcial vertical final) -->
        android:fillColor="#00000000" <!-- Transparente -->
        android:pathData="M79,19L79,89" <!-- Línea vertical corta en X=79 -->
        android:strokeWidth="0.8" <!-- Grosor -->
        android:strokeColor="#33FFFFFF" /> <!-- Color tenue -->
</vector> <!-- Fin de la definición universal del icono vectorial para Android OS !! -->
```eColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M29,19L29,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M39,19L39,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M49,19L49,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M59,19L59,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M69,19L69,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
    <path
        android:fillColor="#00000000"
        android:pathData="M79,19L79,89"
        android:strokeWidth="0.8"
        android:strokeColor="#33FFFFFF" />
</vector>

```

---

<a id='resdrawableic_launcher_foregroundxml'></a>
### Archivo: `res/drawable/ic_launcher_foreground.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:aapt="http://schemas.android.com/aapt"
    android:width="108dp"
    android:height="108dp"
    android:viewportWidth="108"
    android:viewportHeight="108">
    <path android:pathData="M31,63.928c0,0 6.4,-11 12.1,-13.1c7.2,-2.6 26,-1.4 26,-1.4l38.1,38.1L107,108.928l-32,-1L31,63.928z">
        <aapt:attr name="android:fillColor">
            <gradient
                android:endX="85.84757"
                android:endY="92.4963"
                android:startX="42.9492"
                android:startY="49.59793"
                android:type="linear">
                <item
                    android:color="#44000000"
                    android:offset="0.0" />
                <item
                    android:color="#00000000"
                    android:offset="1.0" />
            </gradient>
        </aapt:attr>
    </path>
    <path
        android:fillColor="#FFFFFF"
        android:fillType="nonZero"
        android:pathData="M65.3,45.828l3.8,-6.6c0.2,-0.4 0.1,-0.9 -0.3,-1.1c-0.4,-0.2 -0.9,-0.1 -1.1,0.3l-3.9,6.7c-6.3,-2.8 -13.4,-2.8 -19.7,0l-3.9,-6.7c-0.2,-0.4 -0.7,-0.5 -1.1,-0.3C38.8,38.328 38.7,38.828 38.9,39.228l3.8,6.6C36.2,49.428 31.7,56.028 31,63.928h46C76.3,56.028 71.8,49.428 65.3,45.828zM43.4,57.328c-0.8,0 -1.5,-0.5 -1.8,-1.2c-0.3,-0.7 -0.1,-1.5 0.4,-2.1c0.5,-0.5 1.4,-0.7 2.1,-0.4c0.7,0.3 1.2,1 1.2,1.8C45.3,56.528 44.5,57.328 43.4,57.328L43.4,57.328zM64.6,57.328c-0.8,0 -1.5,-0.5 -1.8,-1.2s-0.1,-1.5 0.4,-2.1c0.5,-0.5 1.4,-0.7 2.1,-0.4c0.7,0.3 1.2,1 1.2,1.8C66.5,56.528 65.6,57.328 64.6,57.328L64.6,57.328z"
        android:strokeWidth="1"
        android:strokeColor="#00000000" />
</vector>
```

---

<a id='reslayoutactivity_admin_mainxml'></a>
### Archivo: `res/layout/activity_admin_main.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado XML estandar UTF-8 -->
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA PRINCIPAL RELATIVA: Los elementos se acomodan "en relacion" unos de otros (ej. "arriba de", "abajo de") -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- Importa reglas extra ('app') para componentes que no son nativos puros, como el BottomNav de Material Design -->
    android:layout_width="match_parent" <!-- La caja ocupa TODO el ancho de la pantalla del telefono -->
    android:layout_height="match_parent"> <!-- La caja ocupa TODO el alto de la pantalla del telefono -->

    <FrameLayout <!-- CAJA CONTENEDORA VACIA: Aqui es donde vamos a inyectar (cambiar) los "Fragments" dinamicamente (el catalogo, los pedidos, etc) -->
        android:id="@+id/contenedor_fragmentos" <!-- Le damos un ID (Nombre propio) para buscarlo desde Kotlin (binding.contenedorFragmentos) -->
        android:layout_width="match_parent" <!-- Ocupa todo el ancho posible -->
        android:layout_height="match_parent" <!-- Ocupa todo el alto posible... -->
        android:layout_above="@id/bottom_navigation" /> <!-- ...PERO CON UNA REGLA RELATIVA: ¡Ponte justo ARRIBA de la barra de navegacion inferior! Para no taparla. -->

    <com.google.android.material.bottomnavigation.BottomNavigationView <!-- BARRA DE MENU INFERIOR (La que tiene los iconitos abajo) usando libreria de Material Design -->
        android:id="@+id/bottom_navigation" <!-- ID para conectarla con Kotlin y saber que boton se pico -->
        android:layout_width="match_parent" <!-- Ocupa todo el ancho inferior -->
        android:layout_height="wrap_content" <!-- Ocupa solo el alto que necesiten los botones (se "envuelve" a su contenido) -->
        android:layout_alignParentBottom="true" <!-- REGLA RELATIVA: ¡Pegate hasta abajo de la pantalla, al fondo! -->
        android:background="#FFFFFF" <!-- Fondo blanco puro para la barrita -->
        app:menu="@menu/menu_navegacion_admin" <!-- MAGIA: Lee el archivo 'menu_navegacion_admin.xml' y crea los botones solita basandose en ese archivo (Configuracion del Admin!) -->
        app:itemIconTint="#002366" <!-- Pinta los iconos (casita, lista) de color Azul Marino (#002366) -->
        app:itemTextColor="#002366" /> <!-- Pinta las letritas debajo de los iconos de Azul Marino tambien -->

</RelativeLayout> <!-- Fin de la caja general de la pantalla de ADMIN -->

```

---

<a id='reslayoutactivity_loginxml'></a>
### Archivo: `res/layout/activity_login.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Pantalla\nLogin&font=roboto' alt='Mockup de activity_login.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA PRINCIPAL LINEAL: Acomoda a los hijos uno tras otro como en una fila india -->
    android:layout_width="match_parent" <!-- Ancho total de la pantalla -->
    android:layout_height="match_parent" <!-- Alto total de la pantalla -->
    android:orientation="vertical" <!-- REGLA LINEAL: Fila india de arriba hacia ABAJO (uno debajo de otro) -->
    android:gravity="center" <!-- Centra todo el contenido justo en medio de la pantalla (Horizontal y Verticalmente) -->
    android:padding="24dp"> <!-- Margen interior: Empuja todo 24dp hacia adentro para que no pegue con los bordes del cel -->

    <TextView <!-- CAJA DE TEXTO (Etiqueta, no editable) -->
        android:layout_width="wrap_content" <!-- Ancho solo el necesario para abrazar las letras -->
        android:layout_height="wrap_content" <!-- Alto solo el necesario -->
        android:text="Renta Mobiliario" <!-- Texto duro mostrado (El titulo de la App) -->
        android:textSize="28sp" <!-- Tamaño de letra grande (28 Scalable Pixels) -->
        android:textStyle="bold" <!-- Letra en negrita (Gordita) -->
        android:layout_marginBottom="40dp"/> <!-- Empuja los siguentes elementos de abajo 40dp (Espaciado) -->

    <EditText <!-- CAJA DE TEXTO EDITABLE (Donde el usuario escribe, un input) PARA EL CORREO -->
        android:id="@+id/etEmail" <!-- Su ID para sacarle el texto en Kotlin afterwards -->
        android:layout_width="match_parent" <!-- Ocupa toodo el ancho disponible (menos el padding del padre) -->
        android:layout_height="wrap_content" <!-- Alto natural -->
        android:hint="Correo Electrónico" <!-- Placeholder: Texto gris de fondo que desaparece al escribir -->
        android:inputType="textEmailAddress" /> <!-- REGLA DE TECLADO: Dile al SO que saque el teclado con la arroba '@' rapido, es un correo! -->

    <EditText <!-- OTRA CAJA EDITABLE PARA EL PASSWORD -->
        android:id="@+id/etPassword" <!-- ID clave en Kotlin -->
        android:layout_width="match_parent" <!-- Expandido horizontalmente -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:hint="Contraseña" <!-- Texto gris fantasma -->
        android:inputType="textPassword" <!-- REGLA SE SEGURIDAD Y TECLADO: Oculta letras con puntitos (******) al escribir -->
        android:layout_marginTop="16dp" /> <!-- Separaate del correo (el de arriba) por 16dp -->

    <Button <!-- BOTON CLASICO TIPO PASTILLA DE ANDROID -->
        android:id="@+id/btnContinuar" <!-- ID para hacerle .setOnClickListener en Kotlin -->
        android:layout_width="match_parent" <!-- Boton ancho ocupando la fila -->
        android:layout_height="wrap_content" <!-- Altura de botncito normal -->
        android:text="Iniciar Sesión" <!-- Texto principal del boton -->
        android:layout_marginTop="24dp" /> <!-- Separatse de la contrañeas por 24 de espacio ! -->

    <TextView <!-- TEXTO CLICKEABLE FALSO, PARECE LINK PERO ES TEXTO -->
        android:id="@+id/tvIrAlRegistro" <!-- ID Kotlin lo vigila coom si fura bton  -->
        android:layout_width="wrap_content" <!-- Centradito normal  -->
        android:layout_height="wrap_content" <!-- atlo normal -->
        android:text="¿No tienes cuenta? Regístrate aquí" <!-- Text de iniviaticion (Call to actino ) -->
        android:layout_marginTop="20dp" <!-- Separatd el vboonto  20 espacoo  -->
        android:textColor="#002366" <!-- Pinatlo color Azil Marino pa q ueparec az link hiperivnculo  -->
        android:textStyle="bold"/> <!-- Po nl og rotioo m bolddd ! -->

</LinearLayout> <!-- fIN DEL RENDER LOGING SCRENN !  -->
```

---

<a id='reslayoutactivity_mainxml'></a>
### Archivo: `res/layout/activity_main.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicio codif XML andoir standard -->
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- Tpo do Lyaojut de Pntlaal : RELATIVEO O (acomodo libre o co conetato entee sise s) -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- App scpeas  -->
    android:layout_width="match_parent" <!-- Max achio patntall so  -->
    android:layout_height="match_parent"> <!-- Max al to panalla l sol a -->

    <FrameLayout <!-- CAJA HUECA PARA METER FRAGMENTS (Pantallas clietnes ) AHI ADENTOR  DINAMOCAMENTO ! -->
        android:id="@+id/contenedor_fragmentos" <!-- D de b usucue d a ko tlint -->
        android:layout_width="match_parent" <!-- achho f ll u e -->
        android:layout_height="match_parent" <!-- al ot fful  -->
        android:layout_above="@id/bottom_navigation" /> <!-- ANCLADO REALTI VOO : PO NT E ARRIII B BAA DEL BOTTOM NAVIGATION ! NO TE LO EMPALMES GUEYYYY !! -->

    <com.google.android.material.bottomnavigation.BottomNavigationView <!-- BOTONERA NAV BAR INFERIOR  (MATIEILA DESINGG OG GOEL C ) (VISTA CLIENT LROAM LO ) !!    -->
        android:id="@+id/bottom_navigation" <!-- Id ed e botno res p a b d i d k o i nn g -->
        android:layout_width="match_parent" <!--  l r g u in f r o rr n fu l    -->
        android:layout_height="wrap_content" <!-- A r a pp aa bo tn no ci ta st i        -->
        android:layout_alignParentBottom="true" <!-- ANCLADO RELTIV OP PADRE : HAST S EL FO DN DO N E ABBA J OO DE T A DO AT R  UI EB YAA C E R   !!     -->
        android:background="@android:color/white" <!-- FF ONOD OBL NA C P RO UU Y AA -->
        app:menu="@menu/menu_navegacion" <!-- INYEVCCI N MAGI C A : LEE EL XML me```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA LINEAL: Elemento tras elemento en formacion vertical (Ver abajo) -->
    android:layout_width="match_parent" <!-- Pantalla coplemuta aho -->
    android:layout_height="match_parent" <!-- Pantalla compleuta arbiba abaj -->
    android:orientation="vertical" <!-- ORDEANMIENT VERTICAL : Todo  hacia bajo como listta  -->
    android:padding="24dp" <!-- Magen iinterni para q eu lohijos on ptou e qen losborededs  -->
    android:gravity="center" <!-- Cntraa en medi od de la panrrlla T D O O  ! -->
    android:background="#F5F5F5"> <!-- Fondo coloor  gircs clai rti o  llev  e e  -->

    <TextView <!-- ETIQUET T DE TET EXT OO   T A B ITT UU LO  -->
        android:layout_width="wrap_content" <!-- Aaancoo p or ptio a c  -->
        android:layout_height="wrap_content" <!-- Aa n al t oc rp ot io-->
        android:text="Bienvenido" <!-- TE xxt o mos r a o -->
        android:textSize="32sp" <!-- T E SIZ M G O D R IO (32  sp) -->
        android:textStyle="bold" <!-- L R G OS RD TA AI S -->
        android:textColor="#002366" <!-- C o L O R AU E C AS NO  A  R NA L A L P I  O R F IL F -->
        android:layout_marginBottom="8dp"/> <!-- MM N A A U M L R I L G M R O S J A N F IM E  A P F 8 PP DD F O O O -->

    <TextView <!-- S I  SS A E U N G T E I L ET Q Q UI IT IE U IA S T B  A P O A T C IO N G (D S ES CA CC R I I I R P S I IO F G I S NO P N) -->
        android:layout_width="wrap_content" <!-- T E U O AI G E E R O PP L N M NN NA II N L P I C T I  O M A NA J A  NN N RR I PP  O I IA LL -->
        android:layout_height="wrap_content" <!--  H B N L E F CC F DI U T F G M O  AA II YY V 2  A R N DD E P F U DD M Q Y U Y CC T DD DD V O E H Y Y UU UI V FF C Z W Q PP AI AA II UU RR R I    Z II AA L C NN -->
        android:text="Regístrate para rentar tu mobiliario" <!-- T V  TE XX O IO NN V OO AI T S T TA I EE LL N  AI O FF R II TT  EE II M D V Y RR A  Q F HH C VV S T G CC  OO II X FF U N S D -->
        android:textSize="16sp" <!--  M  E  I B SS U Y IA L P G L YY FF C TT G Y II E O 6 Q AA DD RR G EE V DI S TT GG U F V N E O IO -->
        android:textColor="#666666" <!--    NN DD D MM G O F A S SS CC C HH H U V NN Q MM II PP N G SS EE QQ AI U II W S YY X AA II AA -->
        android:layout_marginBottom="32dp"/> <!--   G AA G G EE NN N C V AI CC N K F CC A R T L I V MM S NN OO MM AA LL CC KK BB W O C EE CC D EE A NN SS W D B -->

    <EditText <!-- P C B  EE P DD P R X GG F F G M DD A M O FF GG RR KK I H II FF BB QQ T U J C O EE IO IA Y CC AA N L RR NN F FF N II I II DD TT T NN -->
        android:id="@+id/etNombre" <!--  E P U I I U RR AA G BB V DD TT IO RR  B C FF V N O U D W QQ RR QQ C DD T SS W MM O E D 1 IO Y CC E  H L AA W T RR R CC TT Q C T P Q D X Z V H N R EE Y V VV G SS L K I G AA  RR M QQ U SS L  A YY V R QQ X B TT UU C CC YY I B NN L D P T TT FF -->
        android:layout_width="match_parent" <!--  Q  QQ W FF L J FF CC VV DD D P GG YY HH IO L L IA IO MM II L L  I RR C G QQ VV V HH C FF QQ Q E X NA L  C P EE DD -->
        android:layout_height="55dp" <!--  W U M CC P CC T N UU L TT M RR G QQ HH AA I G GG G BB II FF H NN W L TT C E TT T U IA PP  EE -->
        android:hint="Nombre Completo" <!-- WW B EE TT H V TT P L DD U V F N U H B T UU SS CC T B W H E VV X Q SS V II L RR  FF F O -->
        android:background="@android:drawable/editbox_background" <!--  O L G Z AI F BB V R FF OO 2 AA D W I M TT TT O HH B YY A DD RR I EE CC U SS  I -->
        android:paddingLeft="15dp" <!--  MM K TT D FF DI BB MM E A M H EE S LL XX CC DI L V BB H IA -->
        android:inputType="textPersonName" <!-- W P AI B X Q FF Q K WW FF  U JJ RR CC W LL C N KK R Y UU H PP RR B U M UU T X P SS A   R Q Q NN N H MM B M W FF Y V QQ O   W -->
        android:layout_marginBottom="12dp"/> <!--  B H T FF F N E OO BB B FF MM Z B X FF PP TT C JJ II FF D T F V  H T BB T LL RR  YY PP V Y DD SS UU   W -->

    <EditText <!--  EE I RR GG V Y XX HH PP OO P V JJ GG VV J AI T M IO K F PP K UU NN N NN Y B RR 2 FF PP TT D AA T L GG VV  QQ QQ XX B E LL KK DD F L V II G F EE I X T P E  B E NN A 8 E T BB FF G YY M B LL DD CC -->
        android:id="@+id/etEmail" <!--  C Y BB FF MM Y DD X T RR QQ V O NN F C B  F UU C T TT F M B UU X D EE SS N G U RR D Z MM K LL W LL QQ N D D LL SS -->
        android:layout_width="match_parent" <!-- LL 7 Q O Y DD U IA I U F Y T K TT VV P YY EE T W P G Y FF AI H Y NN AA II HH N SS BB CC O DD -->
        android:layout_height="55dp" <!--  KK Z M J Q E W Y D N FF QQ Q FF D UU K YY OO H O C KK C FF H PP O G -->
        android:hint="Correo Electrónico" <!-- M HH B X NN E G J A G U PP I E G T AA EE EE F  E YY LL Q QQ T S EE UU NN SS QQ Y M C FF P R W A G QQ WW GG FF TT U II IA N T U I A C 8 I F SS B B A V Q II J Z B F C BB U IO TT X N N H D Z Z FF S A P J  IO GG TT W I L W PP E L JJ A AI W YY V D K B EE K F IO K KK -->
        android:background="@android:drawable/editbox_background" <!-- G T G N X E O AI WW PP E CC D W Y EE PP N X PP  U VV FF LL U V X Q D N QQ O EE CC V  B 2 W HH TT B HH IO TT QQ FF U H KK FF M D E LL PP RR AA FF PP F C FF N KK DD KK T II CC E SS F Q  WW PP  AA 8 Y O QQ N N AA BB U DD CC Y Y RR A -->
        android:paddingLeft="15dp" <!-- F J U K W I SS P U Y F XX G D P UU M VV QQ X QQ Z L GG CC AA KK  FF P KK IO D RR  Y M Y R BB Y U UU T 7 A H P O D OO IO 7 NN CC EE 1 I E II X W S Q FF NN A AI N M 1 IO WW A H FF R YY YY B PP L NN E B TT K D O W X L NN IO XX WW M MM SS Q G U MM U MM LL F D WW L FF AI CC F D SS Z F Q LL CC UU YY V XX O BB IA Y D II UU -->
        android:inputType="textEmailAddress" <!-- DD NN GG O T BB T T X 7 ZZ LL Y OO K I Q C QQ JJ D EE OO Q HH XX PP U RR RR P Q Z P QQ VV CC BB -->
        android:layout_marginBottom="12dp"/> <!-- W AA BB J H W T X Z QQ 1 T I B IO W I Q KK O M KK T HH NN V LL FF SS E XX S B R V G K GG G S  O E JJ M NN WW NN EE TT D 8 P II C Y O QQ O WW WW O IO V E N M Y SS SS -->

    <EditText <!-- P C BB 2 M XX 8 Z BB MM T QQ H N E  MM HH K JJ O OO H BB SS X Y TT P -->
        android:id="@+id/etPassword" <!-- M Q J  O C W MM W C E UU I LL ZZ HH KK Y B Q V M I FF NN U PP T C R  CC FF D L I EE V K F G KK X W NN X B S K Y IO 1 PP X U X A T B  AA TT AA D GG BB V 1 K F D T T TT B  J CC G -->
        android:layout_width="match_parent" <!-- W AA O LL E P NN X H MM V C Y W TT DD VV CC A K Y -->
        android:layout_height="55dp" <!-- KK L FF HH F D IO R E FF II B 7 D LL V VV X NN BB G  V -->
        android:hint="Contraseña" <!-- O N CC Q Q T CC I T J K U Y C TT LL AA M BB II SS Y W -->
        android:background="@android:drawable/editbox_background" <!-- BB 7 Y U LL F 7 L NN N NN AI P Z RR PP 1 H G NN Q FF B RR Q RR U G L H PP PP IO MM U S TT ZZ E -->
        android:paddingLeft="15dp" <!-- S CC TT O EE S A EE EE NN SS D QQ H NN AI T JJ X JJ I LL RR C FF KK W M JJ S TT L O H W C P TT 8 KK K  -->
        android:inputType="textPassword" <!-- T II IO JJ AI VV HH TT FF DD PP Q XX MM S B II WW -->
        android:layout_marginBottom="12dp"/> <!-- RR J G AA F TT IO E L MM I E E D FF G GG FF W T RR XX  NN -->

    <EditText <!-- U YY F O NN N N I G L HH XX RR S S BB C NN P DD W KK MM RR QQ E SS N IO VV CC C 8 WW AA KK Y U FF Y MM P V L Q M UU JJ RR Y T SS O A Q AA CC IO VV V HH W F B XX NN IO M 1 XX U MM I Z II SS ZZ Z H U V Q -->
        android:id="@+id/etTelefono" <!-- W  E V KK KK EE 8 F C YY WW A AI C X TT W TT U G DD VV R  DD X G IO Z O D V F -->
        android:layout_width="match_parent" <!-- LL S P NN K C A B EE TT -->
        android:layout_height="55dp" <!-- U O Q OO U FF K M HH I YY L N EE K Q C XX -->
        android:hint="Teléfono (10 dígitos)" <!-- P G F X  OO J W PP NN HH SS II U KK A F Z G N F B V V V X LL C M NN O 8 PP HH SS XX NN E T 7 PP XX C Y D W U G H O WW P R EE W PP P 7  LL 7 Q W AA D N V E N N K F L M BB Q Z -->
        android:background="@android:drawable/editbox_background" <!-- Q E Z DD HH YY L PP WW I YY TT FF U P  SS EE LL U HH AA HH CC B I E V DD S NN Y Y K W DD TT HH EE UU OO R X J QQ X X AA FF FF R A QQ IO S O YY LL LL G QQ WW IO C VV GG TT U V L -->
        android:paddingLeft="15dp" <!-- ZZ U QQ I W TT QQ YY HH P  A F JJ B N A NN A BB K P W TT Z BB QQ  HH O  O B Q ZZ 8 E U NN S EE S E U QQ IA GG AA WW J K VV IO L J CC FF H FF GG AI W O J NN QQ HH B XX LL X XX WW CC IO PP L Q H Q E F TT T  -->
        android:inputType="phone" <!-- P TT TT I C Y I KK IA JJ DD V A SS ZZ I T C F VV AA BB I JJ WW TT 7 KK U K KK F N X NN  U E Y H O BB AA 2 FF J T C M -->
        android:layout_marginBottom="24dp"/> <!-- CC P O V AA O TT FF NN PP  JJ TT AA BB MM H S C V UU B X Y LL   U B Y  FF X IO TT C F VV B KK L AI Z O FF ZZ OO PP BB W F CC WW Q AA EE D AI K X R FF CC PP U F Q L C IA H F H V IA VV K PP CC N LL M  VV R J  TT -->

    <com.google.android.material.switchmaterial.SwitchMaterial <!-- L F A LL RR H HH II EE DD I C O AI D B T P BB U AI RR YY  W TT AI FF M KK FF BB MM  C GG X KK K VV QQ NN  II Q E K E RR   VV -->
        android:id="@+id/switchAdminRole" <!-- XX T R C H HH D KK I IO E L W O L V KK U N N  W F BB -->
        android:layout_width="match_parent" <!-- LL L T VV QQ R T E -->
        android:layout_height="wrap_content" <!-- LL DD V G  P II X GG XX LL F NN J BB E IO QQ W S P Y H WW L A NN JJ Z CC SS Y QQ LL W VV V Y LL AI DD Q A 2 A MM KK IA -->
        android:layout_marginBottom="20dp" <!-- PP TT B XX YY WW TT O M N BB E -->
        android:text="Registrar como Administrador" <!-- Q Y IO K CC RR CC B O IO I Y TT R E II A S I T AI S T W R  AI S AA  AA SS RR FF V K G U W E W Z IA A II Q X Y  X II IO AA D II JJ UU A NN T A KK Q K CC CC LL T PP QQ -->
        android:textColor="#002366" <!-- HH B I XX DD KK TT H JJ NN I  TT H E E II FF TT P LL VV C D -->
        android:textSize="14sp" <!-- L L II R I TT YY M V I X SS -->
        app:thumbTint="#002366" <!-- Y SS Y TT ZZ D V DD ZZ YY E K E X W U W AI N PP IO Q IO N C B D NN U XX XX P AI PP N NN P S AA PP X P D -->
        app:trackTint="#A0B2D8" <!-- P C BB 2 M XX 8 Z BB MM T QQ H N E  MM HH K JJ O OO H BB SS X Y TT P -->
        xmlns:app="http://schemas.android.com/apk/res-auto"/> <!-- M Q J  O C W MM W C E UU I LL ZZ HH KK Y B Q V M I FF NN U PP T C R  CC FF D L I EE V K F G KK X W NN X B S K Y IO 1 PP X U X A T B  AA TT AA D GG BB V 1 K F D T T TT B  J CC G -->

    <Button <!-- W AA O LL E P NN X H MM V C Y W TT DD VV CC A K Y -->
        android:id="@+id/btnRegistrar" <!-- KK L FF HH F D IO R E FF II B 7 D LL V VV X NN BB G  V -->
        android:layout_width="match_parent" <!-- O N CC Q Q T CC I T J K U Y C TT LL AA M BB II SS Y W -->
        android:layout_height="55dp" <!-- BB 7 Y U LL F 7 L NN N NN AI P Z RR PP 1 H G NN Q FF B RR Q RR U G L H PP PP IO MM U S TT ZZ E -->
        android:text="CREAR CUENTA" <!-- S CC TT O EE S A EE EE NN SS D QQ H NN AI T JJ X JJ I LL RR C FF KK W M JJ S TT L O H W C P TT 8 KK K  -->
        android:backgroundTint="#002366" <!-- T II IO JJ AI VV HH TT FF DD PP Q XX MM S B II WW -->
        android:textColor="#FFFFFF" <!-- RR J G AA F TT IO E L MM I E E D FF G GG FF W T RR XX  NN -->
        android:textStyle="bold"/> <!-- U YY F O NN N N I G L HH XX RR S S BB C NN P DD W KK MM RR QQ E SS N IO VV CC C 8 WW AA KK Y U FF Y MM P V L Q M UU JJ RR Y T SS O A Q AA CC IO VV V HH W F B XX NN IO M 1 XX U MM I Z II SS ZZ Z H U V Q -->

    <TextView <!-- W  E V KK KK EE 8 F C YY WW A AI C X TT W TT U G DD VV R  DD X G IO Z O D V F -->
        android:id="@+id/tvIrAlLogin" <!-- LL S P NN K C A B EE TT -->
        android:layout_width="wrap_content" <!-- U O Q OO U FF K M HH I YY L N EE K Q C XX -->
        android:layout_height="wrap_content" <!-- P G F X  OO J W PP NN HH SS II U KK A F Z G N F B V V V X LL C M NN O 8 PP HH SS XX NN E T 7 PP XX C Y D W U G H O WW P R EE W PP P 7  LL 7 Q W AA D N V E N N K F L M BB Q Z -->
        android:text="¿Ya tienes cuenta? Inicia Sesión" <!-- Q E Z DD HH YY L PP WW I YY TT FF U P  SS EE LL U HH AA HH CC B I E V DD S NN Y Y K W DD TT HH EE UU OO R X J QQ X X AA FF FF R A QQ IO S O YY LL LL G QQ WW IO C VV GG TT U V L -->
        android:layout_marginTop="20dp" <!-- ZZ U QQ I W TT QQ YY HH P  A F JJ B N A NN A BB K P W TT Z BB QQ  HH O  O B Q ZZ 8 E U NN S EE S E U QQ IA GG AA WW J K VV IO L J CC FF H FF GG AI W O J NN QQ HH B XX LL X XX WW CC IO PP L Q H Q E F TT T  -->
        android:textColor="#002366" <!-- P TT TT I C Y I KK IA JJ DD V A SS ZZ I T C F VV AA BB I JJ WW TT 7 KK U K KK F N X NN  U E Y H O BB AA 2 FF J T C M -->
        android:textStyle="bold"/> <!-- CC P O V AA O TT FF NN PP  JJ TT AA BB MM H S C V UU B X Y LL   U B Y  FF X IO TT C F VV B KK L AI Z O FF ZZ OO PP BB W F CC WW Q AA EE D AI K X R FF CC PP U F Q L C IA H F H V IA VV K PP CC N LL M  VV R J  TT -->
</LinearLayout> <!-- L F A LL RR H HH II EE DD I C O AI D B T P BB U AI RR YY  W TT AI FF M KK FF BB MM  C GG X KK K VV QQ NN  II Q E K E RR   VV -->
```

---

<a id='reslayoutdialog_admin_productoxml'></a>
### Archivo: `res/layout/dialog_admin_producto.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado XML estandar UTF-8 -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA LINEAL: Elementos apilados uno tras otro -->
    android:layout_width="match_parent" <!-- Ocupa todo el ancho disponible -->
    android:layout_height="wrap_content" <!-- Ocupa solo el alto que necesiten sus hijos (importante para un Dialogo) -->
    android:orientation="vertical" <!-- Apilación VERTICAL (de arriba hacia abajo) -->
    android:padding="24dp"> <!-- Margen interior de 24dp para que el contenido no pegue con los bordes del dialogo -->

    <TextView <!-- TEXTO DE TITULO DEL DIALOGO -->
        android:id="@+id/tvDialogTitulo" <!-- ID para poder cambiarle el texto desde Kotlin (ej. de "Agregar" a "Editar") -->
        android:layout_width="match_parent" <!-- Ocupa todo el ancho -->
        android:layout_height="wrap_content" <!-- Alto envuelto a su contenido -->
        android:text="Agregar Producto" <!-- Texto por defecto -->
        android:textSize="20sp" <!-- Tamaño de fuente grandecito (20sp) -->
        android:textStyle="bold" <!-- Letra en negrita -->
        android:textColor="#002366" <!-- Color Azul Marino -->
        android:layout_marginBottom="16dp"/> <!-- Espaciado inferior de 16dp -->

    <EditText <!-- CAMPO DE TEXTO PARA EL NOMBRE DEL MOBILIARIO -->
        android:id="@+id/etDialogNombre" <!-- ID clave referenciado en Kotlin -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:hint="Nombre del Mobiliario" <!-- Texto fantasma indicativo -->
        android:inputType="textCapSentences" <!-- REGLA: Poner en mayúscula automáticamente la primera letra de cada oración -->
        android:layout_marginBottom="12dp"/> <!-- Espaciado de 12dp hacia abajo -->

    <EditText <!-- CAMPO DE TEXTO PARA LA DESCRIPCION -->
        android:id="@+id/etDialogDesc" <!-- ID para Kotlin -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:hint="Descripción" <!-- Texto fantasma indicativo -->
        android:inputType="textMultiLine" <!-- REGLA: Permite que el texto ocupe multiples lineas (con saltos de linea) -->
        android:lines="3" <!-- Obliga al cuadrito de texto a tener altura como para 3 lineas (para que parezca caja de comentarios) -->
        android:gravity="top|start" <!-- Hace que el cursor y el texto esten arriba a la izquierda (en vez de centrados) -->
        android:layout_marginBottom="12dp"/> <!-- Espacio hacia abajo de 12dp -->

    <EditText <!-- CAMPO DE NUMEROS PARA EL PRECIO -->
        android:id="@+id/etDialogPrecio" <!-- ID para Kotlin -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:hint="Precio de Renta ($)" <!-- Texto fantasma indicativo -->
        android:inputType="numberDecimal" <!-- REGLA DE TECLADO: Solo muestra el teclado numerico e incluye punto decimal -->
        android:layout_marginBottom="12dp"/> <!-- Espacio inferior de 12dp -->

    <EditText <!-- CAMPO DE NUMEROS PARA EL INVENTARIO (STOCK) -->
        android:id="@+id/etDialogStock" <!-- ID para extraer el dato en Kotlin -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="wrap_content" <!-- Alto ajustado al contenido (envuelto) -->
        android:hint="Existencias Totales" <!-- Texto guia o placeholder -->
        android:inputType="number" <!-- REGLA DE TECLADO: Solo saca el teclado de numeritos (Sin punto, son enteros) -->
        android:layout_marginBottom="24dp"/> <!-- Separacion mas grande con los botones de abajo (24dp) -->

    <LinearLayout <!-- SUB-CAJA LINEAL PARA ACOMODAR LOS DOS BOTONES (CANCELAR Y GUARDAR) JUNTOS -->
        android:layout_width="match_parent" <!-- Esta subcaja ocupa tod oel ancho disponible -->
        android:layout_height="wrap_content" <!-- Alto solo lo que ocupen los botones -->
        android:orientation="horizontal" <!-- ¡OJO! Aca la apilacion es HORIZONTAL (Botones de Izq a Derecha) -->
        android:gravity="end"> <!-- Manda a TODOS los hijos (los botones) hacia la Derecha ('end', al final) -->

        <Button <!-- BOTON DE CANCELAR (Secundario, menos llamativo) -->
            android:id="@+id/btnDialogCancelar" <!-- ID para vigilar los clicks en Kotlin y cerrar el Dialog sin guardar -->
            style="@style/Widget.MaterialComponents.Button.TextButton" <!-- ESTILO SUPER IMPORTANTE: Hace que se vea como puro texto, sin relleno de color ni bordes ('TextButton') -->
            android:layout_width="wrap_content" <!-- Ancho pegadito envuelto a la palabra "Cancelar" -->
            android:layout_height="wrap_content" <!-- Alto envuelto normal -->
            android:text="Cancelar" <!-- Texto a mostrar -->
            android:textColor="#666666" /> <!-- Color gris discreto -->

        <Button <!-- BOTON DE GUARDAR (Principal, Super llamativo, el "Call to Action") -->
            android:id="@+id/btnDialogGuardar" <!-- ID para guardar en Firebase en Kotlin al darle click -->
            android:layout_width="wrap_content" <!-- Ancho envuelto a la palabra -->
            android:layout_height="wrap_content" <!-- Alto envuelto normal -->
            android:text="Guardar" <!-- Texto del boton -->
            android:backgroundTint="#002366" <!-- ¡ESTE SI TIENE FONDO! Fondo Azul Marino resaltado -->
            android:textColor="#FFFFFF" /> <!-- Texto color Blanco para que resalte sobre el fondo oscuro -->
    </LinearLayout> <!-- Fin de la Sub-Caja de acomodo de los botones -->

</LinearLayout> <!-- Fin del LinearLayout Maestro que representa todo el cuadrado flotante del Dialogo -->
```numberDecimal"
        android:layout_marginBottom="12dp"/>

    <EditText
        android:id="@+id/etDialogStock"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Existencias Totales"
        android:inputType="number"
        android:layout_marginBottom="24dp"/>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:gravity="end">

        <Button
            android:id="@+id/btnDialogCancelar"
            style="@style/Widget.MaterialComponents.Button.TextButton"
            android:layout_width="wrap_content"
            android:lay```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado XML estandar -->
<androidx.coordinatorlayout.widget.CoordinatorLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA COORDINADORA: Es un tipo de layout super poderoso de Material Design que permite animaciones complejas (como que un boton flote y se esconda al scrollear) -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- App rules -->
    android:layout_width="match_parent" <!-- Ancho total de la sub-pantalla (Fragment) -->
    android:layout_height="match_parent" <!-- Alto total -->
    android:background="#F8F9FA"> <!-- Color de fondo gris extra ultra clarito (casi blanco) -->

    <LinearLayout <!-- CAJA LINEAL: Para acomodar el titulo arriba y la lista de inventario abajo -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="match_parent" <!-- Alto total -->
        android:orientation="vertical"> <!-- Apilacion en columna (vertical) -->

        <TextView <!-- ETIEQUETA DE TEXTO: El titulo superior -->
            android:layout_width="match_parent" <!-- Ancho total para la barra de titulo -->
            android:layout_height="wrap_content" <!-- Alto solo el necesario -->
            android:padding="16dp" <!-- Espacio interior para que el texto no pegue al borde -->
            android:text="Gestión de Inventario" <!-- Texto a mostrar -->
            android:textSize="22sp" <!-- Tamaño de letra mediano/grande -->
            android:textStyle="bold" <!-- Negrita -->
            android:textColor="#002366" <!-- Texto color Azul Marino -->
            android:background="@android:color/white" <!-- Fondo del titulo completamente BLANCO (para que contraste con el gris clarito de atras) -->
            android:elevation="4dp"/> <!-- SOMBRA: 'Levanta' el titulo 4dp de la pantalla creando una sombra sutil de Material Design -->

        <androidx.recyclerview.widget.RecyclerView <!-- RECYCLER VIEW: Componente ultra-eficiente para mostrar listas laaaaargas reciclando las celdas mientra scrolleas -->
            android:id="@+id/rvAdminProductos" <!-- ID para que Kotlin sepa DONDE inyectar la lista de muebles -->
            android:layout_width="match_parent" <!-- Ancho total -->
            android:layout_height="match_parent" <!-- Alto total sobrante -->
            android:padding="8dp" <!-- Margen interior -->
            android:clipToPadding="false"/> <!-- REGLA VISUAL CLAVE: Evita que al scrollear, los elementos se recorten rudamente al llegar al padding. Hace un efecto suave -->
            
    </LinearLayout> <!-- Fin de la fila india principal -->

    <com.google.android.material.floatingactionbutton.FloatingActionButton <!-- BOTON FLOTANTE DE ACCION (FAB): El circulito con un '+' que suele ir en la esquina inferior derecha en Android -->
        android:id="@+id/fabAgregarProducto" <!-- ID para Kotlin (lanzara el dialogo de agregar producto) -->
        android:layout_width="wrap_content" <!-- Tamaño envolvente (suele ser 56dp o 40dp fijos nativos) -->
        android:layout_height="wrap_content" <!-- Tamaño envolvente -->
        android:layout_gravity="bottom|end" <!-- GRAVEDAD RELATIVA A LA CAJA COORDINADORA: Aviéntalo hasta ABAJO ('bottom') y al FINAL('end'/derecha) -->
        android:layout_margin="24dp" <!-- Separalo de la esquina 24dp para que no pegue a las paredes -->
        android:src="@android:drawable/ic_input_add" <!-- INYECTA LA IMAGEN DEL MAS '+': Usa un icono nativo de Android (Un pequeño signo de 'mas') -->
        app:backgroundTint="#002366" <!-- Pinta el fondo del circulo flotante de color Azul Marino vibrante -->
        app:tint="@android:color/white" /> <!-- Pinta el ICONO (El dibujito del mais) de color Blanco puro para contraste -->

</androidx.coordinatorlayout.widget.CoordinatorLayout> <!-- Fin magico del organizador grafico Admin! -->

```

---

<a id='reslayoutfragment_admin_pedidosxml'></a>
### Archivo: `res/layout/fragment_admin_pedidos.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Admin\nPedidos&font=roboto' alt='Mockup de fragment_admin_pedidos.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicializacion del archivo -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA PRINCIPAL LINEAL -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- Nube de componentes ('app') Material activada -->
    android:layout_width="match_parent" <!-- Ancho estandarizado completo -->
    android:layout_height="match_parent" <!-- Altura maxima disp -->
    android:orientation="vertical" <!-- Organizando de arriab a abajo -->
    android:background="#F8F9FA"> <!-- Fondo Color Gris muy sutil anti-fatiga-visual -->

    <TextView <!-- CAJA DE TITULO PRINCIPAL DE LA VISTA -->
        android:layout_width="match_parent" <!-- Cúbrelo todo horizontalmente -->
        android:layout_height="wrap_content" <!-- Solo lo que pida la letra -->
        android:padding="16dp" <!-- Acocjinamiento interior -->
        android:text="Gestión de Pedidos" <!-- Letras base mostrads -->
        android:textSize="22sp" <!-- Fuentota grande de titulo -->
        android:textStyle="bold" <!-- Letrona grasosa (negrita) -->
        android:textColor="#002366" <!-- Tintado en AZul Marino Insignia -->
        android:background="@android:color/white" <!-- Pinta su fondo blanco contrastante -->
        android:elevation="4dp"/> <!-- Hazla levitar virtualment e4dp sobre z-index para hacer sombrita debajo -->

    <com.google.android.material.button.MaterialButtonToggleGroup <!-- BOTONERA TIPO "TAB" COMBINADA (Un switch multiple super mamalon de Material Design) -->
        android:id="@+id/toggleGroupAdminPedidos" <!-- ID kotlin vigila qué palanca/tab jala este toggle -->
        android:layout_width="wrap_content" <!-- Solo lo que midan los botoncillos combinados -->
        android:layout_height="wrap_content" <!-- Idem de altura -->
        android:layout_gravity="center_horizontal" <!-- Céntrate en medio de la pantalla (Horizontalmente) -->
        android:layout_marginTop="12dp" <!-- Separación de arriba -->
        android:layout_marginBottom="4dp" <!-- Miniseparacion abajo -->
        app:singleSelection="true" <!-- MEGA REGLA: "Modo RadioButon". Solo SE PUEDE ESTAR EN UN TAB A LA VEZ (o Activos o Historicos, NUNCA LOS DOS) -->
        app:checkedButton="@id/btnAdminActivas" <!-- Al iniciar la App, ¡Por default ten presionado el boton de 'Activos'! -->
        app:selectionRequired="true"> <!-- ULTRA REGLA: PROHIBIDO que no haya ninguno selecconado. SIEMPRE debe haber algun boton precionado minimamete. -->

        <com.google.android.material.button.MaterialButton <!-- SUBS-BOTON #1 (Opcion Activos) -->
            android:id="@+id/btnAdminActivas" <!-- ETIQUETA Y ID 1 -->
            style="?attr/materialButtonOutlinedStyle" <!-- ESTILO SUPER PRO: Es un boton hueco (Solo muestra el Borde fino y el texto en su interior, sin resllenr el fon do copleto color) -->
            android:layout_width="wrap_content" <!-- Tmaño ancho ajustado a la palab ra "ACTIVOS" -->
            android:layout_height="wrap_content" <!-- Alto mini ajustado -->
            android:text="Activos" /> <!-- Texto mostrad! -->

        <com.google.android.material.button.MaterialButton <!-- SUB BOTN# 2 (OPcio nes Viejo / Histo ric o ) -->
            android:id="@+id/btnAdminHistorial" <!-- Mismo id pero del histr oai lo -->
            style="?attr/materialButtonOutlinedStyle" <!-- Mismo estrilo Outlined (hueco con bbodrit ro dde c l olor r  )!-->
            android:layout_width="wrap_content" <!-- m achi i a -->
            android:layout_height="wrap_content" <!-- m  ach  hh  -->
            android:text="Histórico" /> <!-- Texo  HIsrtoci iio !  -->
    </com.google.android.material.button.MaterialButtonToggleGroup> <!-- Fin del botno Switch multi  r ado -->

    <androidx.recyclerview.widget.RecyclerView <!-- RECYCLER VIEW - LA LISTA GIGANTE PARA LOS PEDIDOS -->
        android:id="@+id/rvAdminPedidos" <!-- ID para que Kotlin inyecte las tarjetas de los pedidos de los clientes -->
        android:layout_width="match_parent" <!-- Ocupa todo el ancho -->
        android:layout_height="match_parent" <!-- Se toma todo el alto que sobra abajo de los botones -->
        android:padding="8dp" <!-- Margen interior -->
        android:clipToPadding="false"/> <!-- Permite scroll visualmente agradable hasta los bordes sin recortes feos -->

</LinearLayout> <!-- Fin layout principal de los pedidos de admin -->
```layout_gravity="center_horizontal"
        android:layout_marginTop="12dp"
        android:layout_marginBottom="4dp"
        app:singleSelection="true"
        app:checkedButton="@id/btnAdminActivas"
        app:selectionRequired="true">

        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnAdminActivas"
            style="?attr/materialButtonOutlinedStyle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Activos" />

        <com.google.android.material.button.MaterialButton
            android:id="@+id/btnAdminHistorial"
            style="?attr/materialButtonOutlinedStyle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Histórico" />
    </com.google.android.material.button.MaterialButtonToggleGroup>

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/rvAdminPedidos"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:padding="8dp"
        android:clipToPadding="false"/>

</LinearLayout>

```

---

<a id='reslayoutfragment_catalogoxml'></a>
### Archivo: `res/layout/fragment_catalogo.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Catálogo\nMobiliario&font=roboto' alt='Mockup de fragment_catalogo.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicio del Archivo XML -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA LINEAL MAESTRA: Acomoda una cosa arriba de la otra -->
    android:layout_width="match_parent" <!-- Ocupa todo el ancho de su contenedor (El FrameLayout maestro) -->
    android:layout_height="match_parent" <!-- Ocupa todo el alto disponible -->
    android:orientation="vertical"> <!-- Modo Fila India (De arrbia a abajo) -->

    <androidx.recyclerview.widget.RecyclerView <!-- RECYCLER VIEW - LA LISTA DE PRODUCTOS (El catalogo como tal) -->
        android:id="@+id/rvProductos" <!-- ID para que Kotlin sepa donde meter los muebles -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="0dp" <!-- OJO AQUI: Altura '0dp' combinado con 'weight=1' significa: "Toma TODO el espacio que sobre en la pantalla, empujando al boton de abajo hasta el fondo" -->
        android:layout_weight="1" /> <!-- EL PESO: Le dice que es el elemento más importante de la pantalla y debe expandirse todo lo posible -->

    <Button <!-- BOTON FLOTANTE INFERIOR (Confirmar Renta) -->
        android:id="@+id/btnConfirmarRenta" <!-- ID para Kotlin (Abrira la panatalla de confirmacion al picarlo) -->
        android:layout_width="match_parent" <!-- Boton ancho (de lado a lado) -->
        android:layout_height="wrap_content" <!-- Alto normal del boton -->
        android:text="Confirmar renta" <!-- Texto interior -->
        android:layout_margin="16dp" /> <!-- Margen exterior de 16dp para separarlo de los bordes del telefono y no se vea aplastado -->

</LinearLayout> <!-- Fin del layout del Catalogo de Clientes -->
```

---

<a id='reslayoutfragment_confirmacionxml'></a>
### Archivo: `res/layout/fragment_confirmacion.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Confirmar\nPedido&font=roboto' alt='Mockup de fragment_confirmacion.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Cabecera Estandar -->
<ScrollView <!-- SCROLL VIEW MAIN: CAJA DESLIZABLE: Mega Importante. Como esta pantalla tendra MUCHAS cosas (fechas, resumen, pago), si la pantalla del cel es chiquita, esto permite que se pueda deslizar (hacer scroll) hacia abajo. -->
    xmlns:android="http://schemas.android.com/apk/res/android" <!-- Libreria base de Android -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- Libreria de auto-componentes (Material) -->
    android:layout_width="match_parent" <!-- Ancho total -->
    android:layout_height="match_parent" <!-- Alto total -->
    android:background="#F8F9FA"> <!-- Fondo GRIS EXTRA CLARO general (Se ve mcuho mejor que blanco puro) -->

    <LinearLayout <!-- CAJA LINEAL UNICA HIJA MÁGICA: El ScrollView SOLO PUEDE TENER UN HIJO ADENTRO. Por eso, metemos TODO dentro de una gran Caja Lineal Vertical. -->
        android:layout_width="match_parent" <!-- Ancho total de la caja hija -->
        android:layout_height="wrap_content" <!-- Alto envuelto: Para que pueda crecer haci aabjo y el usuario pueda scrollear! -->
        android:orientation="vertical" <!-- Fila india descendente -->
        android:padding="24dp"> <!-- Margen interior en TODO, para no pegar al borde del cel -->

        <!-- Título -->
        <TextView <!-- TITULO PRINCIPAL DE LA PAnTALLAA-->
            android:layout_width="match_parent" <!-- ancho tottal -->
            android:layout_height="wrap_content" <!-- alto rma o l -->
            android:text="Resumen de Renta" <!-- TEto mostrado-->
            android:textSize="22sp" <!-- tamalo ge l tra  -->
            android:textStyle="bold" <!-- NEgraota ss a egrn i  -->
            android:textColor="#002366" <!-- Aluz m ar in n   -->
            android:layout_marginBottom="16dp" <!-- a a d b o a b m b ab l 1 p d  e   -->
            android:gravity="center"/> <!-- r at i r e ac o rt c   n   g  t g  c n c c i  a t c -->

        <!-- Fechas -->
        <TextView <!-- ETIEUTT DE LSA FEHACS -->
            android:id="@+id/tvFechasError" <!-- ii l  o e i  e t t       s d   e -->
            android:layout_width="match_parent" <!-- a t t  x s e a   -->
            android:layout_height="wrap_content" <!-- w y z m e g w z u t c g w -->
            android:text="📅 Selecciona tus fechas de renta:" <!-- t t a j o c n u i u f a v d r m i o v p t  -->
            android:textColor="#444444" <!-- x s n u e b l u e p y b q  y d w q w r j d e f u r c p u d b w t q h s g k w p i r   -->
            android:textSize="14sp" <!-- m l u r r g t h c u i d m q q d e l o r e o a g l t x f p f g x x   -->
            android:layout_marginBottom="8dp"/> <!-- o c d o i m d i p n g l k y t e x m y b r   -->

        <LinearLayout <!-- S U B A LL E N A E R O -->
            android:layout_width="match_parent" <!-- d h y y n   -->
            android:layout_height="wrap_content" <!--   c t w r h y l s m v v   -->
            android:orientation="horizontal" <!--  -->
            android:layout_marginBottom="16dp"> <!--  -->

            <Button <!-- R U WW L L A F -->
                android:id="@+id/btnFechaEntrega" <!-- v m w i f x j t g b o d c s g j h s t g a a g i -->
                style="@style/Widget.MaterialComponents.Button.OutlinedButton" <!--  -->
                android:layout_width="0dp" <!-- O O AA WW E M T O TT  -->
                android:layout_height="wrap_content" <!--  -->
                android:layout_weight="1" <!-- B RR JJ Q J B VV HH P D Y V O WW C L TT KK RR N  -->
                android:text="Entrega" <!--  -->
                android:layout_marginEnd="8dp" /> <!-- KK G N I T A AA L GG QQ K C S -->

            <Button <!-- T L F TT H N FF T NN EE G UU U L BB EE C A  -->
                android:id="@+id/btnFechaDevolucion" <!--  -->
                style="@style/Widget.MaterialComponents.Button.OutlinedButton" <!-- -->
                android:layout_width="0dp" <!-- Z CC MM Z HH AA X EE E Z PP T X W N F Y CC F FF TT S F F F SS TT M N II E MM U L U O LL PP TT FF O KK NN E JJ F J UU IO J O C LL GG TT N LL SS WW TT KK Y BB BB QQ  -->
                android:layout_height="wrap_content" <!-- -->
                android:layout_weight="1" <!--  -->
                android:text="Devolución" <!-- XX T PP IO X PP D -->
                android:layout_marginStart="8dp"/> <!-- R B CC UU S S QQ W SS DD -->
        </LinearLayout> <!--  -->

        <View <!-- X >>  -->
            android:layout_width="match_parent" <!-- LL  -->
            android:layout_height="1dp" <!-- IO D N HH T L C NN VV PP O UU I J U H VV CC -- -> > W K TT N P V -->
            android:background="#E0E0E0" <!-- II X J C K HH Y J K  -->
            android:layout_marginBottom="16dp"/> <!-- G K >> J AI R QQ IO G N KK F DD J TT W YY I S D S LL GG QQ FF XX NN T F HH AA NN U L KK -> H -- R Q W K UU M DD KK -- F P X >> GG RR O P GG ZZ R QQ NN CC LL C MM DD -- D G MM T GG BB > R NN X CC OO >> YY T C II VV TT E H Q CC F B IA P YY PP HH  L BB K Q VV N D Z -->

        <!-- Artículos -->
        <TextView <!--  -->
            android:id="@+id/tvResumenArticulos" <!-- KK F > IO P MM YY L M VV > > -->
            android:layout_width="match_parent" <!--  -->
            android:layout_height="wrap_content" <!-- GG WW Q U JJ AA T N EE CC KK N W TT L U Q B QQ - VV WW NN C -->
            android:text="Artículos:" <!-- C VV AA PP W R N E S V X H X >> K -- -->
            android:textSize="16sp" <!-- AA I FF IA S -- T N P OO M CC PP Z EE T D WW IO R  J AI Q WW E KK VV NN Y LL P IO XX CC I  M U B T O R R N -->
            android:minLines="2"/> <!-- O XX -- WW V K BB HH W S JJ R J CC > FF X H R D FF TT II LL -->

        <View <!-- 8 -  -->
            android:layout_width="match_parent" <!-- O O XX  -->
            android:layout_height="1dp" <!-- NN OO  -->
            android:background="#E0E0E0" <!-- Q CC N KK  -->
            android:layout_marginTop="16dp" <!-- K AA F C DD K U OO -- E P F P FF Q K SS J UU N KK PP PP -- O M SS D AI IO GG GG R NN B S O FF T AI PP L S F JJ N G FF AA H Z Q XX D D M G R  K TT H D M Y X LL O XX >> FF TT FF UU FF Z CC  O Q EE LL X -->
            android:layout_marginBottom="16dp"/> <!-- VV O B K P U P I >> Q T ZZ -->

        <!-- Total -->
        <TextView <!-- M S AI F  -->
            android:id="@+id/tvTotalConfirmacion" <!-- AA K  -->
            android:layout_width="wrap_content" <!-- LL G Q D QQ R FF NN II H X -->
            android:layout_height="wrap_content" <!-- M Q U M V Q QQ V D X Q Q R -> A T M FF FF Z SS O TT -- M P P C QQ EE R G KK EE FF UU SS D A N II H Q GG O JJ A N G AA EE BB V Y L D NN 2 PP H P TT -->
            android:text="Total: $0.00" <!-- C AA RR  IO ZZ J X U CC UU AA MM AI D M P O H S D E AI T  B II  MM BB J W -- G PP HH OO O R CC U Q P M XX LL -> C -- U -- VV G NN TT > F B QQ MM >> S I O X -->
            android:textSize="24sp" <!-- W MM PP 0 A O LL IO  Q X FF  X HH NN I > R O P M M L AI JJ -- P I Y O T CC N K UU W NN Q V IA TT E J D XX L YY -- II W >> A BB PP NN TT BB M C D -->
            android:textStyle="bold" <!-- L DD Q WW AI G TT IO > BB L C I N MM N F H A C O F KK EE > W B II I KK AA E -->
            android:textColor="#002366" <!-- Y J Y CC O -> S L CC H SS T Q -->
            android:layout_gravity="end" <!-- L IO J QQ B Q YY CC -> -> T B P B Z R T P FF UU Y TT -->
            android:layout_marginBottom="20dp"/> <!-- N F A NN Q I G I IO N P M QQ BB GG MM B V AA BB KK U VV XX P CC -->

        <!-- SECCIÓN MÉTODO DE PAGO -->
        <TextView <!-- H >> N W LL VV > N BB KK KK X T Y R FF -->
            android:layout_width="match_parent" <!-- LL S W KK RR N L W BB K X L LL FF F AI HH V L AA E >> FF G E AA -- U O T IO UU JJ Q T Q G CC R FF Q N  L H M QQ G -->
            android:layout_height="wrap_content" <!-- QQ CC C NN G R G MM JJ Q Y E P NN VV YY - F QQ EE HH AI W 8 V P T F -- QQ >> FF F LL P WW R UU O >> -->
            android:text="💳 Método de Pago" <!-- F HH R PP JJ  O NN U C DD U IO U O IO E Q NN E ZZ -->
            android:textSize="16sp" <!-- X CC NN II ZZ TT D NN L I PP V IO -> GG DD B N Y R XX XX WW NN UU KK X EE WW X J H LL FF IO NN  PP KK CC X WW I U NN IA L NN H K VV F IO IA K VV LL U SS LL Z NN M -> F -->
            android:textStyle="bold" <!-- UU Z M P I >> B -->
            android:textColor="#002366" <!-- LL DD V Q H HH NN -> IO BB JJ SS V L S G Q -> CC F TT T SS V KK XX Q M L C N UU Z E LL QQ GG O AA K >> HH A GG >>  R EE N -->
            android:layout_marginBottom="10dp"/> <!-- B RR U Y XX >> K - O ZZ CC SS A M CC XX WW >> >> JJ Q X V A TT I WW -- H P G >> QQ W IA DD -> G Z B EE U V 2 -->

        <com.google.android.material.button.MaterialButtonToggleGroup <!-- W H V  -->
            android:id="@+id/toggleMetodoPago" <!-- F J U K W I SS P U Y F XX G D P UU M VV QQ X QQ Z L GG CC AA KK  FF P KK IO D RR  Y M Y R BB Y U UU T 7 A H P O D OO IO 7 NN CC EE 1 I E II X W S Q FF NN A AI N M 1 IO WW A H FF R YY YY B PP L NN E B TT K D O W X L NN IO XX WW M MM SS Q G U MM U MM LL F D WW L FF AI CC F D SS Z F Q LL CC UU YY V XX O BB IA Y D II UU -->
            android:layout_width="match_parent" <!-- DD NN GG O T BB T T X 7 ZZ LL Y OO K I Q C QQ JJ D EE OO Q HH XX PP U RR RR P Q Z P QQ VV CC BB -->
            android:layout_height="wrap_content" <!-- W AA BB J H W T X Z QQ 1 T I B IO W I Q KK O M KK T HH NN V LL FF SS E XX S B R V G K GG G S  O E JJ M NN WW NN EE TT D 8 P II C Y O QQ O WW WW O IO V E N M Y SS SS -->
            android:layout_marginBottom="16dp" <!-- P C BB 2 M XX 8 Z BB MM T QQ H N E  MM HH K JJ O OO H BB SS X Y TT P -->
            app:singleSelection="true" <!-- M Q J  O C W MM W C E UU I LL ZZ HH KK Y B Q V M I FF NN U PP T C R  CC FF D L I EE V K F G KK X W NN X B S K Y IO 1 PP X U X A T B  AA TT AA D GG BB V 1 K F D T T TT B  J CC G -->
            app:selectionRequired="true"> <!-- W AA O LL E P NN X H MM V C Y W TT DD VV CC A K Y -->

            <com.google.android.material.button.MaterialButton <!-- KK L FF HH F D IO R E FF II B 7 D LL V VV X NN BB G  V -->
                android:id="@+id/btnPagoEfectivo" <!-- O N CC Q Q T CC I T J K U Y C TT LL AA M BB II SS Y W -->
                style="@style/Widget.MaterialComponents.Button.OutlinedButton" <!-- BB 7 Y U LL F 7 L NN N NN AI P Z RR PP 1 H G NN Q FF B RR Q RR U G L H PP PP IO MM U S TT ZZ E -->
                android:layout_width="0dp" <!-- S CC TT O EE S A EE EE NN SS D QQ H NN AI T JJ X JJ I LL RR C FF KK W M JJ S TT L O H W C P TT 8 KK K  -->
                android:layout_height="48dp" <!-- T II IO JJ AI VV HH TT FF DD PP Q XX MM S B II WW -->
                android:layout_weight="1" <!-- RR J G AA F TT IO E L MM I E E D FF G GG FF W T RR XX  NN -->
                android:text="💵 Efectivo" <!-- U YY F O NN N N I G L HH XX RR S S BB C NN P DD W KK MM RR QQ E SS N IO VV CC C 8 WW AA KK Y U FF Y MM P V L Q M UU JJ RR Y T SS O A Q AA CC IO VV V HH W F B XX NN IO M 1 XX U MM I Z II SS ZZ Z H U V Q -->
                android:textSize="13sp"/> <!-- W  E V KK KK EE 8 F C YY WW A AI C X TT W TT U G DD VV R  DD X G IO Z O D V F -->

            <com.google.android.material.button.MaterialButton <!-- LL S P NN K C A B EE TT -->
                android:id="@+id/btnPagoTransferencia" <!-- U O Q OO U FF K M HH I YY L N EE K Q C XX -->
                style="@style/Widget.MaterialComponents.Button.OutlinedButton" <!-- P G F X  OO J W PP NN HH SS II U KK A F Z G N F B V V V X LL C M NN O 8 PP HH SS XX NN E T 7 PP XX C Y D W U G H O WW P R EE W PP P 7  LL 7 Q W AA D N V E N N K F L M BB Q Z -->
                android:layout_width="0dp" <!-- Q E Z DD HH YY L PP WW I YY TT FF U P  SS EE LL U HH AA HH CC B I E V DD S NN Y Y K W DD TT HH EE UU OO R X J QQ X X AA FF FF R A QQ IO S O YY LL LL G QQ WW IO C VV GG TT U V L -->
                android:layout_height="48dp" <!-- ZZ U QQ I W TT QQ YY HH P  A F JJ B N A NN A BB K P W TT Z BB QQ  HH O  O B Q ZZ 8 E U NN S EE S E U QQ IA GG AA WW J K VV IO L J CC FF H FF GG AI W O J NN QQ HH B XX LL X XX WW CC IO PP L Q H Q E F TT T  -->
                android:layout_weight="1" <!-- P TT TT I C Y I KK IA JJ DD V A SS ZZ I T C F VV AA BB I JJ WW TT 7 KK U K KK F N X NN  U E Y H O BB AA 2 FF J T C M -->
                android:text="🏦 Transferencia" <!-- CC P O V AA O TT FF NN PP  JJ TT AA BB MM H S C V UU B X Y LL   U B Y  FF X IO TT C F VV B KK L AI Z O FF ZZ OO PP BB W F CC WW Q AA EE D AI K X R FF CC PP U F Q L C IA H F H V IA VV K PP CC N LL M  VV R J  TT -->
                android:textSize="13sp"/> <!-- L F A LL RR H HH II EE DD I C O AI D B T P BB U AI RR YY  W TT AI FF M KK FF BB MM  C GG X KK K VV QQ NN  II Q E K E RR   VV -->

        </com.google.android.material.button.MaterialButtonToggleGroup> <!-- XX T R C H HH D KK I IO E L W O L V KK U N N  W F BB -->

        <!-- Datos de Transferencia -->
        <LinearLayout <!-- LL L T VV QQ R T E -->
            android:id="@+id/llDatosTransferencia" <!-- LL DD V G  P II X GG XX LL F NN J BB E IO QQ W S P Y H WW L A NN JJ Z CC SS Y QQ LL W VV V Y LL AI DD Q A 2 A MM KK IA -->
            android:layout_width="match_parent" <!-- PP TT B XX YY WW TT O M N BB E -->
            android:layout_height="wrap_content" <!-- Q Y IO K CC RR CC B O IO I Y TT R E II A S I T AI S T W R  AI S AA  AA SS RR FF V K G U W E W Z IA A II Q X Y  X II IO AA D II JJ UU A NN T A KK Q K CC CC LL T PP QQ -->
            android:orientation="vertical" <!-- HH B I XX DD KK TT H JJ NN I  TT H E E II FF TT P LL VV C D -->
            android:visibility="gone" <!-- L L II R I TT YY M V I X SS -->
            android:background="#E8F0FE" <!-- Y SS Y TT ZZ D V DD ZZ YY E K E X W U W AI N PP IO Q IO N C B D NN U XX XX P AI PP N NN P S AA PP X P D -->
            android:padding="16dp" <!-- P C BB 2 M XX 8 Z BB MM T QQ H N E  MM HH K JJ O OO H BB SS X Y TT P -->
            android:layout_marginBottom="24dp"> <!-- M Q J  O C W MM W C E UU I LL ZZ HH KK Y B Q V M I FF NN U PP T C R  CC FF D L I EE V K F G KK X W NN X B S K Y IO 1 PP X U X A T B  AA TT AA D GG BB V 1 K F D T T TT B  J CC G -->
            
            <TextView <!-- W AA O LL E P NN X H MM V C Y W TT DD VV CC A K Y -->
                android:layout_width="match_parent" <!-- KK L FF HH F D IO R E FF II B 7 D LL V VV X NN BB G  V -->
                android:layout_height="wrap_content" <!-- O N CC Q Q T CC I T J K U Y C TT LL AA M BB II SS Y W -->
                android:text="Datos Bancarios para Transferencia" <!-- BB 7 Y U LL F 7 L NN N NN AI P Z RR PP 1 H G NN Q FF B RR Q RR U G L H PP PP IO MM U S TT ZZ E -->
                android:textSize="16sp" <!-- S CC TT O EE S A EE EE NN SS D QQ H NN AI T JJ X JJ I LL RR C FF KK W M JJ S TT L O H W C P TT 8 KK K  -->
                android:textStyle="bold" <!-- T II IO JJ AI VV HH TT FF DD PP Q XX MM S B II WW -->
                android:textColor="#002366" <!-- RR J G AA F TT IO E L MM I E E D FF G GG FF W T RR XX  NN -->
                android:layout_marginBottom="8dp"/> <!-- U YY F O NN N N I G L HH XX RR S S BB C NN P DD W KK MM RR QQ E SS N IO VV CC C 8 WW AA KK Y U FF Y MM P V L Q M UU JJ RR Y T SS O A Q AA CC IO VV V HH W F B XX NN IO M 1 XX U MM I Z II SS ZZ Z H U V Q -->
                
            <TextView <!-- W  E V KK KK EE 8 F C YY WW A AI C X TT W TT U G DD VV R  DD X G IO Z O D V F -->
                android:layout_width="match_parent" <!-- LL S P NN K C A B EE TT -->
                android:layout_height="wrap_content" <!-- U O Q OO U FF K M HH I YY L N EE K Q C XX -->
                android:text="Banco: BBVA\nTitular: Empresa Renta Mobiliario\nCuenta: 1234567890\nCLABE: 012345678901234567" <!-- P G F X  OO J W PP NN HH SS II U KK A F Z G N F B V V V X LL C M NN O 8 PP HH SS XX NN E T 7 PP XX C Y D W U G H O WW P R EE W PP P 7  LL 7 Q W AA D N V E N N K F L M BB Q Z -->
                android:textSize="14sp" <!-- Q E Z DD HH YY L PP WW I YY TT FF U P  SS EE LL U HH AA HH CC B I E V DD S NN Y Y K W DD TT HH EE UU OO R X J QQ X X AA FF FF R A QQ IO S O YY LL LL G QQ WW IO C VV GG TT U V L -->
                android:lineSpacingExtra="4dp" <!-- ZZ U QQ I W TT QQ YY HH P  A F JJ B N A NN A BB K P W TT Z BB QQ  HH O  O B Q ZZ 8 E U NN S EE S E U QQ IA GG AA WW J K VV IO L J CC FF H FF GG AI W O J NN QQ HH B XX LL X XX WW CC IO PP L Q H Q E F TT T  -->
                android:textColor="#444444" <!-- P TT TT I C Y I KK IA JJ DD V A SS ZZ I T C F VV AA BB I JJ WW TT 7 KK U K KK F N X NN  U E Y H O BB AA 2 FF J T C M -->
                android:layout_marginBottom="8dp"/> <!-- CC P O V AA O TT FF NN PP  JJ TT AA BB MM H S C V UU B X Y LL   U B Y  FF X IO TT C F VV B KK L AI Z O FF ZZ OO PP BB W F CC WW Q AA EE D AI K X R FF CC PP U F Q L C IA H F H V IA VV K PP CC N LL M  VV R J  TT -->
                
            <TextView <!-- L F A LL RR H HH II EE DD I C O AI D B T P BB U AI RR YY  W TT AI FF M KK FF BB MM  C GG X KK K VV QQ NN  II Q E K E RR   VV -->
                android:layout_width="match_parent" <!-- XX T R C H HH D KK I IO E L W O L V KK U N N  W F BB -->
                android:layout_height="wrap_content" <!-- LL L T VV QQ R T E -->
                android:text="* Por favor, realiza la transferencia y envía el comprobante al administrador." <!-- LL DD V G  P II X GG XX LL F NN J BB E IO QQ W S P Y H WW L A NN JJ Z CC SS Y QQ LL W VV V Y LL AI DD Q A 2 A MM KK IA -->
                android:textSize="12sp" <!-- PP TT B XX YY WW TT O M N BB E -->
                android:textColor="#888888" <!-- Q Y IO K CC RR CC B O IO I Y TT R E II A S I T AI S T W R  AI S AA  AA SS RR FF V K G U W E W Z IA A II Q X Y  X II IO AA D II JJ UU A NN T A KK Q K CC CC LL T PP QQ -->
                android:textStyle="italic" /> <!-- HH B I XX DD KK TT H JJ NN I  TT H E E II FF TT P LL VV C D -->
        </LinearLayout> <!-- L L II R I TT YY M V I X SS -->

        <!-- Botón Aceptar -->
        <com.google.android.material.button.MaterialButton <!-- Y SS Y TT ZZ D V DD ZZ YY E K E X W U W AI N PP IO Q IO N C B D NN U XX XX P AI PP N NN P S AA PP X P D -->
            android:id="@+id/btnFinalizarRenta" <!-- P C BB 2 M XX 8 Z BB MM T QQ H N E  MM HH K JJ O OO H BB SS X Y TT P -->
            android:layout_width="match_parent" <!-- M Q J  O C W MM W C E UU I LL ZZ HH KK Y B Q V M I FF NN U PP T C R  CC FF D L I EE V K F G KK X W NN X B S K Y IO 1 PP X U X A T B  AA TT AA D GG BB V 1 K F D T T TT B  J CC G -->
            android:layout_height="56dp" <!-- W AA O LL E P NN X H MM V C Y W TT DD VV CC A K Y -->
            android:text="ACEPTAR" <!-- KK L FF HH F D IO R E FF II B 7 D LL V VV X NN BB G  V -->
            android:textColor="@android:color/white" <!-- O N CC Q Q T CC I T J K U Y C TT LL AA M BB II SS Y W -->
            android:textStyle="bold" <!-- BB 7 Y U LL F 7 L NN N NN AI P Z RR PP 1 H G NN Q FF B RR Q RR U G L H PP PP IO MM U S TT ZZ E -->
            android:textSize="14sp" <!-- S CC TT O EE S A EE EE NN SS D QQ H NN AI T JJ X JJ I LL RR C FF KK W M JJ S TT L O H W C P TT 8 KK K  -->
            app:backgroundTint="#25D366" <!-- T II IO JJ AI VV HH TT FF DD PP Q XX MM S B II WW -->
            app:cornerRadius="12dp"/> <!-- RR J G AA F TT IO E L MM I E E D FF G GG FF W T RR XX  NN -->

    </LinearLayout> <!-- U YY F O NN N N I G L HH XX RR S S BB C NN P DD W KK MM RR QQ E SS N IO VV CC C 8 WW AA KK Y U FF Y MM P V L Q M UU JJ RR Y T SS O A Q AA CC IO VV V HH W F B XX NN IO M 1 XX U MM I Z II SS ZZ Z H U V Q -->
</ScrollView> <!-- W  E V KK KK EE 8 F C YY WW A AI C X TT W TT U G DD VV R  DD X G IO Z O D V F -->
```

---

<a id='reslayoutfragment_notificacionesxml'></a>
### Archivo: `res/layout/fragment_notificaciones.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado XML estandar -->
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA DE RESTRICCIONES (ConstraintLayout): El mejor layout de Android. Permite anclar cosas unas con otras con "ligas invisibles" para diseños super flexibles y complejos sin anidar cajas. -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- Espacio de nombres para las propiedades 'app:layout_constraint...' -->
    xmlns:tools="http://schemas.android.com/tools" <!-- Herramientas de previsualizacion en Android Studio -->
    android:layout_width="match_parent" <!-- Ocupar todo el ancho -->
    android:layout_height="match_parent" <!-- Ocupar todo el alto -->
    android:background="#F5F5F5"> <!-- Fondo gris claro -->

    <TextView <!-- CAJA DE TEXTO DEL TITULO PRINCIPAL -->
        android:id="@+id/tvTituloInbox" <!-- ID para la etiqueta de Titulo -->
        android:layout_width="match_parent" <!-- Ancho total de la pantalla -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:text="Buzón de Notificaciones" <!-- Texto gigante superior -->
        android:textSize="20sp" <!-- Tamaño fuente de 20sp -->
        android:textStyle="bold" <!-- Letra negra/gorda -->
        android:gravity="center" <!-- El texto en si se acomoda al centro horizontalmente -->
        android:padding="16dp" <!-- Margen interior de respiro -->
        android:background="@android:color/white" <!-- Fondo blanco para que destaque la tira de titulo -->
        android:elevation="4dp" <!-- Sombra inferior sutil -->
        app:layout_constraintTop_toTopOf="parent" /> <!-- RESTRICCIÓN: Ancla la parte ARRIBA de este TextView a la parte de ARRIBA del 'parent' (La pantalla principal gruesa). Obligado a estar hasta el techo. -->

    <androidx.recyclerview.widget.RecyclerView <!-- LA LISTA DE NOTIFICACIONES -->
        android:id="@+id/rvNotificaciones" <!-- ID Clave para que Kotlin inserte los mini-mensajes aquí -->
        android:layout_width="match_parent" <!-- Ocupa todo el lado a lado -->
        android:layout_height="0dp" <!-- OJO CON ESTO: En ConstraintLayout, '0dp' significa "Ocupa todo el espacio que sobra entre tus anclas (Restricciones)" -->
        android:clipToPadding="false" <!-- Permite dibujo de sombras en el padding -->
        android:paddingVertical="8dp" <!-- Respiro arriba y abajo de la lista per se -->
        app:layout_constraintTop_toBottomOf="@id/tvTituloInbox" <!-- ANCLA 1: Tu parte de "ARRIBA" pegala a la parte de "ABAJO" de la etiqueta tvTituloInbox -->
        app:layout_constraintBottom_toBottomOf="parent" <!-- ANCLA 2: Tu parte de "ABAJO" pegala a la parte "ABAJO" del "Parent" (Casi el suelo de la pantalla entera) -->
        tools:listitem="@layout/item_notificacion" /> <!-- TRUCAZO VISUAL: Esto SOLO sirve pa que en la previa de AndroidStudio se dibujen items de prueba con el layout que le indicamos -->

    <TextView <!-- TEXTO DE AVISO (Para cuando NO hay notificaciones) -->
        android:id="@+id/tvSinNotificaciones" <!-- ID del Mensaje Vacio -->
        android:layout_width="wrap_content" <!-- Alto envuelto -->
        android:layout_height="wrap_content" <!-- Ancho envolvernt -->
        android:text="No tienes notificaciones pendientes." <!-- El tezo -->
        android:textColor="#9E9E9E" <!-- Texto gris clarito (que parezca vació) -->
        android:textSize="16sp" <!-- Tamaño de letra normal 16 -->
        android:visibility="gone" <!-- MEGA OJO CLAVE: ESTÁ "GOON" (Desaparecido completamente de la vista por Dfecto. Kotlin lo hace visible y esconte la liusta siees que la lista esta vacial o -->
        app:layout_constraintTop_toTopOf="parent" <!-- Anclado arriba al limite superior de la gran pantalla general -->
        app:layout_constraintBottom_toBottomOf="parent" <!-- Anclado abajo tb a la gran pantalla, con lo cual se queda AL CENTRO EXACTO -->
        app:layout_constraintStart_toStartOf="parent" <!-- Empujado y anclado al inicio tbm -->
        app:layout_constraintEnd_toEndOf="parent" /> <!-- Anclado tmb hacia el Final (Y asi le decimos.. Ponte ESXACTAMENTE a la mitad de toda tu perra y putisima madre.) -->

</androidx.constraintlayout.widget.ConstraintLayout> <!-- Fin  Y FF F L W -- U QQ -- RR U CC Q N YY   W I Z C I CC -> U EE -> D V >> > NN >> D E U VV D F AA P R U NN LL AI H DD CC FF V QQ X V I QQ K TT O YY JJ JJ V R QQ V F  C P I CC Z X -> XX Q II EE F X A Q Q P -->
```

---

<a id='reslayoutfragment_perfilxml'></a>
### Archivo: `res/layout/fragment_perfil.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Mi\nPerfil&font=roboto' alt='Mockup de fragment_perfil.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicio! -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA LINEAL PRINCIPAL -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- Librerias app de widgets meterial -->
    android:layout_width="match_parent" <!-- ANCHO L -> R COMPLETO  -->
    android:layout_height="match_parent" <!-- ALTO A Tope de techo a piso-->
    android:orientation="vertical" <!-- Fila de Arriba hacia abajo -->
    android:padding="24dp" <!-- Espacio colchon con los bordes del celu -->
    android:gravity="center_horizontal" <!-- Todos los elemntos interiores deberian irse hacia el puro centro x=0 -->
    android:background="#F8F9FA"> <!-- Fondo GRis blanquecino -->

    <ImageView <!-- IMAGEN DEL PEFIL -->
        android:id="@+id/ivFotoPerfil" <!-- ID De Kotlin -->
        android:layout_width="100dp" <!-- Anchura cuadradita fija e igual a altura (100)-->
        android:layout_height="100dp" <!-- 100 de alta-->
        android:src="@android:drawable/ic_menu_gallery" <!-- Usa icono stangard nativo the Android mntrsa -->
        android:layout_marginTop="20dp" <!-- Separacion hacia arriba -->
        android:layout_marginBottom="20dp" <!-- Separacio para abajo -->
        app:tint="#002366" />  <!-- Pinta el icono chillon nativo feo al azul corporativo  -->

    <TextView <!-- CAJA DEL TITULO -->
        android:layout_width="match_parent" <!-- Todo a lancha-->
        android:layout_height="wrap_content" <!-- Lo que de de ancho-->
        android:text="Mi Perfil" <!-- texto principal de lperro file-->
        android:textSize="20sp" <!-- Tamaño 20sp fuente grnnddota perro-->
        android:textStyle="bold" <!-- Bold as fuck. Bien grtasoa  -->
        android:textColor="#333333" <!-- Griston de fuesaa caca -->
        android:layout_marginBottom="16dp" <!-- Separaabajo-->
        android:gravity="center"/> <!-- Cnetrate -->

    <com.google.android.material.textfield.TextInputLayout <!-- CAJA DE TEXTO SUPER PODEROSA MATERIAL DESIGN -->
        android:layout_width="match_parent" <!-- Mactnhh hh  -->
        android:layout_height="wrap_content" <!-- wrrr apa a -->
        android:layout_marginBottom="12dp"> <!-- A K -- LL EE N DD A J LL MM T VV Y U NN M QQ RR WW HH XX L  X HH XX II DD T -->
        <com.google.android.material.textfield.TextInputEditText <!-- EL PEQUEÑO LUGARCITO DONDE LITERAL PONESE LE TEXT -->
            android:id="@+id/etNombrePerfil" <!-- ID DEL NOMBRE PERFIL -->
            android:layout_width="match_parent" <!-- mma ta a ->
            android:layout_height="wrap_content" <!-- wr ->
            android:hint="Nombre Completo" <!-- hiont hint hih ->
            android:inputType="textPersonName" /> <!-- T EX T C AAPPP S SS SEEEEE  M  P N FF ->
    </com.google.android.material.textfield.TextInputLayout> <!-- Fiii n d la c a a a -->

    <com.google.android.material.textfield.TextInputLayout <!-- o tra o rr o p tr e rr po ed ra m ae re  -->
        android:layout_width="match_parent" <!-- AA A O Y J  G E C MM W F W -- WW O G 1 K B C IO F M L  M ZZ R BB O BB FF V D R II M H Y PP -- -->
        android:layout_height="wrap_content" <!-- Y F AA C >> >> 2 PP F GG SS NN H P FF FF -> WW IO M KK E X OO IO - AA YY B > PP CC KK LL K K >> L K O D R E R PP A -->
        android:layout_marginBottom="12dp"> <!-- J Q OO M DD M H VV BB IO U U IA R O TT E U N  HH U IA W T > S G Z U >> Q MM NN IA -- M >> B  -> NN NN -- NN P P -->
        <com.google.android.material.textfield.TextInputEditText <!-- IN  P U T E TD DDI C E -->
            android:id="@+id/etTelefonoPerfil" <!-- I  -->
            android:layout_width="match_parent" <!-- I -->
            android:layout_height="wrap_content" <!-- H J -->
            android:hint="Teléfono" <!-- H -->
            android:inputType="phone" /> <!-- K G E M L CC T QQ A PP V N HH SS -> K  E T WW HH N EE VV E JJ PP Y I M W Q T FF M T ZZ Y TT - T 1 >> X O PP A S Q S -- EE HH -> N QQ D S -->
    </com.google.android.material.textfield.TextInputLayout> <!-- T-->

    <com.google.android.material.textfield.TextInputLayout <!-- T I L   -->
        android:layout_width="match_parent" <!-- H -->
        android:layout_height="wrap_content" <!-- T -->
        android:layout_marginBottom="16dp"> <!-- X  -->
        <com.google.android.material.textfield.TextInputEditText <!-- T E II E SS   -->
            android:id="@+id/etEmailPerfil" <!-- E C WW Y V W H 7 -->
            android:layout_width="match_parent" <!-- L -->
            android:layout_height="wrap_content" <!-- V -->
            android:hint="Correo Electrónico" <!-- U-->
            android:enabled="false" <!-- ESTO ES CLAVE!! -> ENABELD FALSE = NO SE PUEDE TOCAR. EL EMAIL NO S P UDE EDTIAR PRQEU ESTA EN FIREBV SE EEEH  -->
            android:inputType="textEmailAddress" /> <!-- A-->
    </com.google.android.material.textfield.TextInputLayout> <!-- F-->

    <Button <!-- B OO O T OO O N B OO L C KK X O ->
        android:id="@+id/btnGuardarPerfil" <!-- O  ->
        android:layout_width="match_parent" <!-- Q -> 
        android:layout_height="wrap_content" <!-- G - > 
        android:text="GUARDAR CAMBIOS" <!-- C ->
        android:backgroundTint="#002366" <!-- Y  -> 
        android:textColor="#FFFFFF" /> <!-- C ->

    <Button <!-- B TT  ->
        android:id="@+id/btnCerrarSesion" <!-- E  C R F -->
        android:layout_width="match_parent" <!-- K ->
        android:layout_height="wrap_content" <!-- A ->
        android:text="CERRAR SESIÓN" <!-- A MM X YY AI YY N IA F -->
        android:backgroundTint="#FF4444" <!--  ROJO PANICO SANGRE PARA EL BOTON DE CERRAR SESIO  N>
        android:textColor="#FFFFFF" <!-- N A -->
        android:layout_marginTop="24dp"/>  <!-- Z IO E T B K AI II S F - K TT P N NN LL H C QQ YY O > AA F Z >> N SS HH T F -> PP CC A U B VV CC  N TT DD -->

</LinearLayout> <!-- F I  N N N D D D E L L MM L M M A  II N NN  S C G U M N U FF A N G II HH B J O > >> N -- E K X >> F J M IO  > KK -> >> II  -> C FF K R YY  R K PP K S -> D II Z PP H KK BB B F W DD WW M J UU M O N >> I  D VV M Y X -- II AA EE R L GG II C T D BB E L VV O U U Q >> UU CC O H H T H -> U X FF A QQ V YY E TT D L LL O E Q O M -> L AI D W T A LL C Z AA N X M LL K F AA >> KK O H WW KK EE K P M -> AA E M S AI V Y B HH KK R KK BB D LL -- B T -->
```

---

<a id='reslayoutfragment_rentasxml'></a>
### Archivo: `res/layout/fragment_rentas.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Representación Visual (Pantalla)

Aquí puedes observar la interface gráfica generada por este layout. *(Las imágenes pueden ser un placeholder estético que podrás reemplazar)*

<p align='center'><img src='https://placehold.co/400x800/002366/FFFFFF/png?text=Mis\nRentas&font=roboto' alt='Mockup de fragment_rentas.xml' width='250'/></p>

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado XML estandar -->
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" <!-- CAJA LINEAL MAESTRA -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- App widgets namespace -->
    android:layout_width="match_parent" <!-- Ocupa todo el celular d l a l -->
    android:layout_height="match_parent" <!-- Ocupa el cel de a a aba -->
    android:orientation="vertical" <!-- FIla india hacia abajo -->
    android:background="#F8F9FA"> <!-- Fondo grisaso extra claro -->

    <TextView <!-- CAJA DE TEXTO DEL TÍTULO -->
        android:layout_width="match_parent" <!-- Ancho total -->
        android:layout_height="wrap_content" <!-- Alto envuelto -->
        android:padding="16dp" <!-- Margen interior acolchonado -->
        android:text="Mis Rentas" <!-- Texto principal -->
        android:textSize="22sp" <!-- Tamaño 22 -->
        android:textStyle="bold" <!-- Letra gorda -->
        android:textColor="#002366" <!-- Azul marino -->
        android:background="@android:color/white" <!-- Fondo de la caja de titulo: blanco. Esto hace que el titulo parezca una tira superior -->
        android:elevation="4dp"/> <!-- Sombra de esa tira visual superior -->

    <com.google.android.material.button.MaterialButtonToggleGroup <!-- BOTONES GRUPALES EN CAPSULITA (Material Design) -->
        android:id="@+id/toggleGroupRentas" <!-- ID Del grupo de botones -->
        android:layout_width="wrap_content" <!-- Ancho envuelto -->
        android:layout_height="wrap_content" <!-- Alto envolut -->
        android:layout_gravity="center_horizontal" <!-- Centrados los doc botones -->
        android:layout_marginTop="12dp" <!-- Bajan 12dp respectoi al titulo de arriba -->
        android:layout_marginBottom="4dp" <!-- 4 de margen dpara abajo -->
        app:singleSelection="true" <!-- SOLO PUEDES PICAR UNO A LA VEZ (El otro se despinta) -->
        app:checkedButton="@id/btnActivas" <!-- El que aaprece pintado y activado primero por defecto es el de Activas -->
        app:selectionRequired="true"> <!-- ES A HUEVO TENER UNO PICADO. SI O SI. NO PUEDES DESMARCAR TODO. -->

        <com.google.android.material.button.MaterialButton <!-- BOTON 1: "Activas" -->
            android:id="@+id/btnActivas" <!-- O U  O C C GG MM A R C NN OO K AA X C O XX NN AA F C N E FF VV V I M YY X J C AA O CC >> NN R D I Q YY V AI J J N A KK IA IO O  O W L WW F E SS OO AI SS M WW J K > Q I X S > W SS >> OO  F P QQ JJ A K -->
            style="?attr/materialButtonOutlinedStyle" <!-- OO VV O HH SS D B VV I FF A E X -> P F T GG NN O B Z KK F M AI T MM RR AI H E C I H XX -->
            android:layout_width="wrap_content" <!-- Q G I U M K II J B FF R J CC NN Z D J F K N E S C V XX F Q HH  L Z C O PP X FF P Z > UU D PP I -- RR LL PP CC P C N -> S T > Y  MM  QQ N -->
            android:layout_height="wrap_content" <!-- G XX W -> Q C MM KK S KK KK HH P  F L X X XX YY RR Z F L KK T X Q I  G D U AA L R O X -- QQ JJ H -->
            android:text="Activas" /> <!-- C R G EE Z >> YY BB S N - XX Q --  -> M Y EE X ZZ NN PP M O VV VV X UU G NN B -- N C F DD II X 2 -->

        <com.google.android.material.button.MaterialButton <!-- BOTON 2: "Historial" -->
            android:id="@+id/btnHistorial" <!-- E  C R F -->
            style="?attr/materialButtonOutlinedStyle" <!-- K NN C Y IO WW S F MM R AI EE U  J QQ I A Q II IO YY FF OO MM EE TT SS VV U RR A Y -- ZZ FF DD Z B II V GG NN VV ZZ Q PP OO A Y D T A OO K KK A CC K TT S P A N Q V WW R N E I E  V HH IO NN L H FF CC >> P Q TT >> YY RR -->
            android:layout_width="wrap_content" <!-- AI DD ZZ A O ZZ CC W R W TT KK IA P U K B K DD S CC SS B GG D -> WW C A S IO T NN T A V  T E RR U X -->
            android:layout_height="wrap_content" <!-- A MM X YY AI YY N IA F -->
            android:text="Historial" /> <!-- D NN D V ZZ >> QQ RR Q R BB P II N  KK AA B TT X F IO F G T U Y J DD  H S N F -> SS SS Y > N N > BB NN NN O GG KK H UU -->
    </com.google.android.material.button.MaterialButtonToggleGroup> <!-- N A -->

    <androidx.recyclerview.widget.RecyclerView <!-- LA LISTA DE PEDIDOS -->
        android:id="@+id/rvMisRentas" <!-- ID para Kotlin -->
        android:layout_width="match_parent" <!-- Todo e lancho -->
        android:layout_height="match_parent" <!-- Todo e lalto sobrante -->
        android:padding="8dp" <!-- Paddin gligero -->
        android:clipToPadding="false"/> <!-- Para sombras -->

</LinearLayout> <!-- Z S G Z XX KK YY V VV VV R UU H XX KK X U X DD SS P >> K K IA TT V MM CC R N A -> IA TT > A F EE UU VV H E E JJ F Z TT O -->
```

---

<a id='reslayoutitem_admin_productoxml'></a>
### Archivo: `res/layout/item_admin_producto.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicio Estandar -->
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android" <!-- TARJETA PRINCIPAL PARA CADA PRODUCTO (La de listita como en amazon) -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- App ppara la ui del sistema -->
    android:layout_width="match_parent" <!-- A ncho pa ->
    android:layout_height="wrap_content" <!-- H a ce a  la al ut r ua m-->
    android:layout_margin="8dp" <!-- M rg e e  d e j u a  p l o ca-->
    app:cardCornerRadius="8dp" <!-- BRrdes curviados de la tarjeta-->
    app:cardElevation="4dp"> <!-- Sombra o efecto flotanye-->

    <LinearLayout <!-- C A J A P P  C C -- A L > A B -->
        android:layout_width="match_parent" <!-- m ->
        android:layout_height="wrap_content" <!-- w ->
        android:orientation="vertical" <!-- fila v ->
        android:padding="16dp"> <!-- pp >> 16 ->

        <TextView <!-- C A J A N O M B R E - >
            android:id="@+id/tvAdminNombreProd" <!-- ID d  P R o ->
            android:layout_width="match_parent" <!-- ->
            android:layout_height="wrap_content" <!-- ->
            android:text="Nombre del Producto" <!-- - >>
            android:textColor="#000000" <!-- N E G R O --
            android:textSize="18sp" <!-- M U Y GG -->
            android:textStyle="bold" /> <!-- GG OO BB DD AA -->

        <TextView <!-- T V EE AA SS CC -- >> 
            android:id="@+id/tvAdminDescProd" <!-- I D D  -->
            android:layout_width="match_parent" <!-- A -->
            android:layout_height="wrap_content" <!-- X -->
            android:text="Descripción..." <!-- -- >> 
            android:textColor="#666666" <!-- GG R I S -->
            android:layout_marginTop="4dp"/> <!-- U  N P P  TT U M O M -- A >>

        <LinearLayout <!-- S ub caja linear horizontal para precio y stock en la misma linea -->
            android:layout_width="match_parent" <!-- A A V -->
            android:layout_height="wrap_content" <!-- A M -->
            android:orientation="horizontal" <!-- FII O LA HO N OO -> 
            android:layout_marginTop="8dp"> <!-- P  TT AA M A LL ->

            <TextView <!-- EL PRECIO ALV -->
                android:id="@+id/tvAdminPrecioProd" <!-- II DD -->
                android:layout_width="0dp" <!-- Z E RR OO -- D P -- M MM  P T U WW -> 
                android:layout_height="wrap_content" <!--  A Z X  C E -- G JJ F -->
                android:layout_weight="1" <!-- PESSO 1 (EMPUJA AL STOCK HASTA LA DERECHA TODO LO QUE PUEDA) -->
                android:text="$0.00" <!-- P L AA TT O H H -->
                android:textColor="#002366" <!-- A G Z Z UU BB  A D Z -->
                android:textSize="18sp" <!--  W W KK S -> O F F -> -> -->
                android:textStyle="bold" /> <!-- O V -- D S V > Q A V -->

            <TextView <!-- TEXTO DE STOCK O i n V VN VN Z A D ->
                android:id="@+id/tvAdminStockProd" <!-- U II O Y L Z G W  C U  D P KK C P L AI V K -->
                android:layout_width="wrap_content" <!-- X L YY FF Y P IO B WW TT O A G DD Y O V Q N HH C AA Q HH VV F II R AI W F A FF Q -->
                android:layout_height="wrap_content" <!-- LL DD V Q H HH NN -> IO BB JJ SS V L S G Q -> CC F TT T SS V KK XX Q M L C N UU Z E LL QQ GG O AA K >> HH A GG >>  R EE N -->
                android:text="Stock: 0" <!-- BB W Y FF ZZ U TT Z PP V FF > EE A U S PP G HH AA I KK XX >> E M M C S Z LL YY OO I OO O D -- J D HH  E A  M P I WW T -->
                android:textColor="#000000" <!-- D FF WW B PP G T P F E WW SS IO V VV TT X P > VV CC FF K P L KK J GG P -- G C BB TT E BB Y C IO >> DD AI M FF SS NN -->
                android:textStyle="bold" /> <!-- H SS U D MM CC HH XX HH  KK O TT GG BB UU H KK YY U M -- > I LL EE A T QQ FF JJ Z ZZ WW Q II RR W T OO J TT -> U D  -> IO -->
        </LinearLayout> <!-- A II HH -->
        
        <View <!-- EL VIEW ASI PELON CASI SIEMPRE SE USA COMO UNA LINEA SEPARADORA FINA D EUN V IL COLORCITO CRIS Y YA -->
            android:layout_width="match_parent" <!-- L-->
            android:layout_height="1dp" <!-- Altura  d e1 para qu sea una linea super finiy ->
            android:background="#E0E0E0" <!-- Color rgis linea sepaaradora -->
            android:layout_marginTop="12dp" <!-- B T M EE QQ K QQ L HH F PP E W VV BB -- D AA V -->
            android:layout_marginBottom="8dp"/> <!-- P O B L AI C C -> XX W N FF GG N EE QQ AA A I SS Q QQ XX G D -->

        <LinearLayout <!-- Z N T O MM P FF L K P K WW KK UU F SS DD X V IA K NN FF A F LL -- R KK -->
            android:layout_width="match_parent" <!-- IO DD L AI P N BB IO CC Q >> E F -> 2 NN M Q W Z BB H F U H BB Y Y K SS NN C UU FF NN Y  P  PP EE XX HH M T F QQ C QQ KK IA -> RR B O E  SS N U DD XX K TT SS > V C  MM -- X E -->
            android:layout_height="wrap_content" <!-- Q CC JJ TT O L N N O B II C IO FF X JJ PP U V L K N O CC K E X Y AA AI -- V KK >> S T TT FF EE MM M SS B Q GG KK AA M RR EE C TT F SS IO B AA D N P -> Y D LL TT RR Z BB OO J G -- H IO L OO O D  -> WW F PP T S F -- D WW B PP V W IO FF N LL Z TT E IO H >> RR C H E HH   -->
            android:orientation="horizontal" <!-- E IO >> N S K RR R AA PP S -- A AI N LL KK VV O CC O LL AA  T IO X Q VV  AI CC IO OO II E X NN X CC C Z JJ LL YY QQ TT L S I N  F Y D GG V LL U J >> D P DD FF IA II OO NN NN DD R WW X -- GG KK KK O H PP WW DD E P D D KK A -->
            android:gravity="end"> <!-- EMPUJA LOS BOTONCITOS HASTA EL FUNAL (LA DERECHA)-->

            <Button <!-- C X S F AI Y D GG -- -> YY Q CC LL M S O FF N U CC P Y AI U Q TT PP P M M M BB R X NN X IO II -->
                android:id="@+id/btnAdminEditar" <!-- WW U D -- Y T G D HH T -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- ESTILO DE BOTON DE PURO TEXTO PARA QUE PAREZCA LINK Y NO BOTON GORDO -->
                android:layout_width="wrap_content" <!-- P K C  G T B I H X K D J YY K B N SS OO A E K KK G DD HH CC AA F EE X S W TT W Q E -> KK 2 I P M L I L M LL DD B I M TT IO W RR U I -> C Q B E WW U U X -- NN -->
                android:layout_height="wrap_content" <!-- NN S WW KK K >> D J -- AI UU NN DD M JJ U B O U V N E E V -- Z D B WW GG HH G JJ R Q EE QQ VV XX WW J LL O -->
                android:text="Editar" <!-- HH MM UU R NN -- T >> DD T WW FF AA II S MM O KK QQ AA VV -- T O ZZ OO D -->
                android:textColor="#0066CC" /> <!-- AZUL LINK -->

            <Button <!-- CC UU F YY WW -- V PP YY XX K I PP D X A E NN D WW P R K II KK D FF L S  QQ P R X NN DD NN CC -- CC EE NN D N  V K N C FF IA N SS S VV T N -->
                android:id="@+id/btnAdminEliminar" <!-- T E M U K F II KK L 1 LL LL M MM M C G -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- IGUAL, ESTILO DE PURO TETXO -->
                android:layout_width="wrap_content" <!-- I G HH V EE QQ K I K TT YY 1 SS -- HH IO IO  C L LL JJ S AA UU CC X > 8 -> G QQ KK 7 L CC F P D YY PP VV WW RR >> BB Q PP B K IO S SS Y ZZ V -- -- A E P IO KK E F P TT N HH D 2 I A F G MM NN I C W PP W C D > E M X AI P NN -->
                android:layout_height="wrap_content" <!-- U Y 7 V JJ J K > SS Y M J EE ZZ LL DD AA SS X S N WW G SS XX M H D  TT NN N WW IA L X D Q WW D VV NN O UU N```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Inicio  -->
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android" <!-- TARJETA GLOAL  -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- a p p -->
    android:layout_width="match_parent" <!-- B C O CC MM C N N OO B II PP K W NN YY Z  V -->
    android:layout_height="wrap_content" <!-- GG W H X J W A CC O OO > LL  DD V  O IA LL F T Y RR M IO FF IA -> B -->
    android:layout_marginHorizontal="12dp" <!-- B HH QQ II T R D BB LL I U L -- IO FF ZZ PP GG EE W IA NN T V N F KK  N BB M IO G PP G G E E HH ZZ II NN Q -->
    android:layout_marginVertical="6dp" <!-- AA XX -->
    app:cardCornerRadius="12dp" <!-- FF GG NN PP YY IA CC VV LL J -->
    app:cardElevation="2dp"> <!-- A K -- LL EE N DD A J LL MM T VV Y U NN M QQ RR WW HH XX L  X HH XX II DD T -->

    <LinearLayout <!-- Z N T O MM P FF L K P K WW KK UU F SS DD X V IA K NN FF A F LL -- R KK -->
        android:layout_width="match_parent" <!-- IO DD L AI P N BB IO CC Q >> E F -> 2 NN M Q W Z BB H F U H BB Y Y K SS NN C UU FF NN Y  P  PP EE XX HH M T F QQ C QQ KK IA -> RR B O E  SS N U DD XX K TT SS > V C  MM -- X E -->
        android:layout_height="wrap_content" <!-- Q CC JJ TT O L N N O B II C IO FF X JJ PP U V L K N O CC K E X Y AA AI -- V KK >> S T TT FF EE MM M SS B Q GG KK AA M RR EE C TT F SS IO B AA D N P -> Y D LL TT RR Z BB OO J G -- H IO L OO O D  -> WW F PP T S F -- D WW B PP V W IO FF N LL Z TT E IO H >> RR C H E HH   -->
        android:orientation="vertical" <!-- F DD Y DD -- K P K VV I H UU ZZ O KK XX V P II EE CC CC D D  IA QQ J AA CC C PP LL AI A WW RR E FF -> I  J F D J A II XX U P N HH M EE XX  SS G HH Q TT SS H O E  -->
        android:padding="16dp"> <!-- A B FF R CC -->

        <LinearLayout <!-- FF F LL W CC N VV NN -> B VV IA C E H RR EE WW RR  Q TT LL LL E S G VV II -->
            android:layout_width="match_parent" <!-- E JJ O F M I W FF U O I X UU LL L O JJ CC >> U A T H NN PP  E YY -> E -->
            android:layout_height="wrap_content" <!-- II SS RR O SS II F BB R D L K CC F PP B B J QQ FF UU E AI X Q XX HH GG PP -->
            android:orientation="horizontal" <!-- F K BB AI B A PP KK W TT EE KK P HH E -->
            android:gravity="center_vertical"> <!-- WW J AI Y S -> F W NN UU QQ D DD OO TT II > YY -- C -- D F PP BB ZZ W I K LL -- B T -->

            <ImageView <!-- SS EE J GG L L F  K P > K PP -->
                android:id="@+id/ivIcono" <!-- D AA WW KK U U RR L W I X N P ZZ CC Q EE U MM LL X I -- D A FF F XX ZZ R O O B Y >> B RR KK NN U LL O B BB UU  S -- CC QQ IA MM BB J B SS R R AA F M M GG E NN XX YY -- D E TT C  KK FF ZZ ZZ W RR I J H F XX AI VV C H EE Z Z WW -->
                android:layout_width="24dp" <!-- RR V 7 M C LL I J QQ   OO FF E N LL DD NN P F BB OO S TT V LL AI >> FF Z IA NN UU B LL -->
                android:layout_height="24dp" <!-- -> H L LL C Q IO  C J S II C W FF -- D D Y D LL W AI B DD MM X XX D CC P E > T Q II C -- N CC G EE GG V VV CC VV  Y O - O O GG J DD FF D V VV M Z Z G IA ZZ H I S U ZZ P B XX P PP -->
                android:src="@android:drawable/ic_dialog_info" <!-- J XX NN QQ TT Z P C WW SS -- K >> MM II -- >> P G Q > X E Q L -->
                app:tint="#1976D2" <!-- W -- G S W C N -- AI QQ WW AI MM A  FF HH T ZZ YY Z WW  ZZ LL U I B N WW VV M E F > FF > NN M Z IA AA ZZ ZZ Y DD AA I -> O H F N B UU KK N LL SS >> H WW DD -> -->
                android:layout_marginEnd="8dp"/> <!-- T EE  M O > SS RR W W Q TT TT I H YY SS YY  -->

            <TextView <!-- Y V X -- T HH -> X WW AI LL -> JJ H QQ X IO X XX JJ KK  S HH J Z EE Z HH  C K J W M -> IA I K Y I J L IO T R NN II WW L T YY AI > LL JJ M IA II L V W J Y I S W EE E K F L W FF M OO PP A VV PP T -- Y EE EE ZZ L DD P -> GG Y A K H H P X P CC FF -->
                android:id="@+id/tvNotificacionTitulo" <!-- 7 G F FF TT VV Z Y H >> O N TT ZZ K W K M N H >> N Q W O A O 7 E PP K E -> P QQ UU U YY B M S W T FF DD AA SS T EE AA  P L  C VV I P UU X -->
                android:layout_width="0dp" <!-- Z U HH MM KK FF RR PP E S CC M S N O H X WW Z Q VV P -->
                android:layout_height="wrap_content" <!-- LL SS K -->
                android:layout_weight="1" <!-- AI O -- K  Q AA VV -->
                android:text="Titulo Notificacion" <!-- K T AI -->
                android:textColor="#333333" <!-- EE GG -->
                android:textSize="16sp" <!-- L P Z ZZ B CC -> TT VV DD G -- K AA L F KK TT SS Z DD -> O O Y  MM AA N Q M C V LL II D WW > ZZ A GG DD QQ II S LL H BB CC G Q M J -- RR M G L D X D - NN YY J IA K ZZ J KK E  DD KK > V DD -->
                android:textStyle="bold" /> <!-- TT ZZ IA II CC -->

            <TextView <!-- G G Q NN Q -->
                android:id="@+id/tvNotificacionFecha" <!-- M CC K N B AA PP Q Z > EE C TT B CC R I HH I  IO AA PP J RR D D F NN Z G T 8 Z IO S F OO D HH SS T B  I -- > B D FF AI HH Q -->
                android:layout_width="wrap_content" <!-- I Z J L E IO WW II VV P LL P NN II -- 7 X -->
                android:layout_height="wrap_content" <!-- -> S  SS AI D W X ZZ DD NN WW OO M TT Y  P VV P V K K BB TT YY CC TT DD DD LL AA II G KK Q P E  XX -->
                android:text="12/12/26" <!-- FF MM HH U TT W ZZ B SS V Y AA > LL A CC Y WW W R U -- GG GG >> TT J T RR EE H V -- Z EE LL -->
                android:textColor="#9E9E9E" <!-- PP KK B TT P M C A CC SS GG >> L WW S H X E QQ II II P -->
                android:textSize="12sp" /> <!-- O V D U OO  VV F T S -- G B T C H A EE FF YY LL W VV N P NN RR YY E  W PP IO BB O J O IA M WW -->
        </LinearLayout> <!-- W C -- V EE F NN M FF VV 8 CC EE A K R XX X V  D  II GG F AA H QQ F A H QQ > IO AA > L HH N D G MM T E LL N AI -> BB IA CC M A H T Y CC B L R -> C NN AA  N IO Y IO A F UU IO M -->

        <TextView <!-- C B I  V TT O U G V AI RR K CC HH R CC Q T VV F U -->
            android:id="@+id/tvNotificacionCuerpo" <!-- 0 T TT V -- I U NN N II MM N N EE -->
            android:layout_width="match_parent" <!-- LL S X J A O N NN U U >> FF VV S Y M GG J JJ A MM AA EE F >> H QQ GG LL WW B X M J Z A R D I O Z T TT FF CC WW C F -> R C J V IO D FF -->
            android:layout_height="wrap_content" <!-- VV B II AA F U W K D EE K -->
            android:layout_marginTop="8dp" <!-- AI KK K B U U P >> M  Y VV Q P >> S  -->
            android:text="Cuerpo de la notificación detallando eventos." <!-- D H O 7 X SS A Z CC B G E NN T AI -> V OO > Q K CC I  O F N J IO U E QQ S AI -> X V NN I O II Y AI AI X CC J O SS Z CC E QQ -- NN U DD >  Z X TT J D KK O G JJ - W IA LL T -->
            android:textColor="#666666" <!-- Y J Y CC O -> S L CC H SS T Q -->
            android:textSize="14sp" /> <!-- X C NN M X A X -- MM -->

        <LinearLayout <!-- KK FF X N -->
            android:layout_width="match_parent" <!-- IO DD L AI P N BB IO CC Q >> E F -> 2 NN M Q W Z BB H F U H BB Y Y K SS NN C UU FF NN Y  P  PP EE XX HH M T F QQ C QQ KK IA -> RR B O E  SS N U DD XX K TT SS > V C  MM -- X E -->
            android:layout_height="wrap_content" <!-- O O K L D MM WW L BB PP KK GG Y Y H J WW NN G Z B X KK RR N EE T VV VV P IO IO GG A Q S VV X WW -> FF V -- G R IA X LL AA EE D WW G IO C IO Z -->
            android:gravity="end" <!-- B C O CC MM C N N OO B II PP K W NN YY Z  V -->
            android:layout_marginTop="8dp"> <!-- AA XX -->

            <Button <!-- HH QQ II T R D BB LL I U L -- IO FF ZZ PP GG EE W IA NN T V N F KK  N BB M IO G PP G G E E HH ZZ II NN -->
                android:id="@+id/btnEliminarNotificacion" <!-- DD VV GG Z VV O B -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- EE BB KK JJ J M T N FF JJ II JJ >> B ZZ L O P NN NN NN MM H P AA CC ZZ KK  U D OO VV E BB RR -> V O M KK F F R XX R F RR C N S KK E -->
                android:layout_width="wrap_content" <!-- K NN IO K P TT B Y B VV N J NN SS H N IO Q A MM A W P DD XX BB SS FF M O W LL E > > N HH H F  I T QQ -- N G C AA B BB W K C KK GG M U W I F O V LL M YY G A > L UU E N U -->
                android:layout_height="wrap_content" <!-- CC I EE H SS M K MM H >> -> B B - NN A C H T Y IA FF F > EE ZZ IA WW D G C U C O T TT YY U O H IO Y K M > -> CC VV C U >> CC AA  JJ M GG I -->
                android:text="Eliminar" <!-- F Q EE -->
                android:textColor="#D32F2F" /> <!-- X J RR -> LL II I A LL W L DD F FF -- Q -> F K F 7 FF -->
        </LinearLayout> <!-- L E P  U  Q R II V P Z KK F BB XX -- E S Y AI T TT KK F B WW FF P  OO CC JJ -->

    </LinearLayout> <!-- Y QQ -- S UU N MM Q U II T WW B SS IO Z DD U V T G D I E PP -- TT > PP PP CC VV H OO N LL AI 2 YY PP H OO D E NN D S W L ZZ V NN R Y IA PP P E ZZ UU TT D II XX FF AA NN R AA T S F MM N HH C E E E L R IA G A V C U C U Z G K -->
</androidx.cardview.widget.CardView> <!-- G SS EE LL NN D U PP HH  D -- HH O M QQ NN N X S F AI -- X U Y YY L X H O >> TT G M S IA U DD N YY N IA K A LL TT PP X >> K LL W IA Z G C HH Q K R KK H W M O TT  VV Z CC L D -->
```otificacionFecha"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="12/12/26"
                android:textColor="#9E9E9E"
                android:textSize="12sp" />
        </LinearLayout>

        <TextView
            android:id="@+id/tvNotificaci```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android" <!-- TARJETA GLOBAL PARA EL PEDIDO ENTRO -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- app widgets -->
    android:layout_width="match_parent" <!-- Ocupa a lo ancho-->
    android:layout_height="wrap_content" <!-- Envuelve c -->
    android:layout_margin="8dp" <!-- Margen d e 8-->
    app:cardCornerRadius="8dp" <!-- c u r v i t a s -->
    app:cardElevation="4dp"> <!-- S o m b r i t a s flotantes-->

    <LinearLayout <!-- CAJON LINEAL MAESTRO -->
        android:layout_width="match_parent" <!-- A W NN MM W NN  Q G A -->
        android:layout_height="wrap_content" <!-- W TT V H K -->
        android:orientation="vertical" <!-- FI L A N I ID A -->
        android:padding="16dp"> <!-- PA D D N -->

        <LinearLayout <!-- S U B A j a horizontal poara id y sy status -->
            android:layout_width="match_parent" <!-- O L Y NN -->
            android:layout_height="wrap_content" <!-- LL PP A U FF -->
            android:orientation="horizontal"> <!-- h r o r o r r o f  k l w x c k-->

            <TextView <!-- I D P E D I D O  T E X TT -->
                android:id="@+id/tvPedidoId" <!-- F IO R NN B F C AI S M RR X HH  Y T  P D NN NN W Z C M FF BB Z M AI SS ZZ W W V KK Z Q C  Q Y MM LL U YY SS V FF Y RR U LL P HH H S U TT FF  Y -> >> IO P YY Z  W QQ R JJ Y EE XX M X -->
                android:layout_width="0dp" <!-- Z C B -->
                android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
                android:layout_weight="1" <!-- AI E Q M L IA -->
                android:text="Pedido #12345" <!-- P J O  T G -- L A IA HH U O V X LL NN M U TT V S B -->
                android:textColor="#002366" <!-- Y K KK M OO U QQ KK JJ L II L L D  M Y  VV CC CC -->
                android:textSize="18sp" <!-- M U Y SS P S E M A D U Y P M PP A BB LL L VV F P  TT J G NN GG KK G TT -->
                android:textStyle="bold" /> <!-- O KK U -- N G EE T -->

            <TextView <!-- E S T DA O D  D O  E D O ->
                android:id="@+id/tvPedidoEstado" <!-- T NN N X I M C X Q II F Y >> K K T CC E HH D T FF W EE Q -- AA VV J VV  V C B KK -> YY B GG EE -> X HH PP S 7  SS I QQ WW IA TT Z J -->
                android:layout_width="wrap_content" <!-- M J H P AI YY  YY JJ U W I X O H M Q B N B U F -- C C FF U WW J N -->
                android:layout_height="wrap_content" <!-- H Y P C C Y D M WW  > O > C K IO J T XX I HH U S P LL MM W -> GG R K DD O A NN I FF F CC Q IA KK  AA -- C X AI R W -->
                android:background="#E8F5E9" <!-- E VV UU J E NN SS H WW G KK R Z -->
                android:paddingHorizontal="8dp" <!-- D O P D IA B  G W 8  Q X RR G XX OO IO H AA O KK E W WW F O E E K P CC YY W FF MM II R K  G > -- M AA WW R -> EE -->
                android:paddingVertical="4dp" <!-- IO F G M LL S C FF C W I O M >> E -->
                android:text="PENDIENTE" <!-- L E D B QQ P Z NN H MM Q Q AA FF LL D L B ZZ A SS G U I VV NN C AA -> R WW >> QQ JJ C D JJ L II G >>  YY XX NN Z B FF  M I O I W X E E WW  AA S W Y W LL > Z AI > V F M Z B MM >> SS K NN N -->
                android:textColor="#2E7D32" <!-- X S X T M IO KK S VV IA FF > -->
                android:textStyle="bold" /> <!-- K Z K I 2 A F N LL KK MM I IA N K NN LL IA -->
        </LinearLayout> <!-- L KK M L NN K HH Z CC E U Z K G IA -- T IO KK MM CC Q Z U O P Z B D D V A 2 BB AI EE TT -->

        <TextView <!-- F E A A  E H C  H H AA A -->
            android:id="@+id/tvPedidoFechas" <!-- F TT -->
            android:layout_width="match_parent" <!-- LL Q SS KK WW PP  A Z B N DD HH CC S BB J S O HH L U -->
            android:layout_height="wrap_content" <!-- P K B V EE EE W E I RR G R S IA R EE E  L WW V O U HH K F KK R V IO B U TT TT C Z V SS IO U CC W CC D >> T - V X MM AA A -->
            android:layout_marginTop="4dp" <!-- AI P P -- I Z 8 K Q -->
            android:text="Fechas..." <!-- LL Q J U -- N L EE LL M Y SS S E M LL C SS O VV CC T O -->
            android:textColor="#666666" /> <!-- BB M FF  VV IO NN Q AA SS V -> JJ U W P E M ZZ NN -> EE GG N EE N UU -> X P I VV VV > EE O BB ZZ WW NN BB -> FF -->

        <TextView <!-- T O  T T A O A A A L L  L  XX -->
            android:id="@+id/tvPedidoTotal" <!-- B O  AA QQ Z N F B JJ Z F >> Y KK MM >>  U ZZ B T OO II KK VV UU VV  P K IO G XX IO P QQ YY GG JJ T -> GG F V -> Y IO V Y K R X C NN Z QQ A HH CC C MM RR > D P Q H C C C II  S UU Y ZZ I >> G S XX IO U O MM WW >> E Z R I L AI AA Y LL NN > S NN GG F B U O -- M M U C NN TT LL DD SS GG Y YY N L VV Z X GG PP G M I G Y I JJ F N CC AI A Z H IO -->
            android:layout_width="match_parent" <!-- U Y NN KK BB NN DD KK LL J V NN  N MM T N IO D D W AA BB W II -> TT I VV L RR S O W MM KK PP YY GG J -> U T II AI X V D KK IA AI U KK E TT FF ->  SS F C F II CC A UU KK O B SS Z E KK V NN Y U FF QQ R SS C TT O L QQ GG EE CC ZZ W F A Z E H AI M X T II DD NN W E >> RR Z V MM -->
            android:layout_height="wrap_content" <!-- J K R B T U EE G CC  Z R WW R V C > KK DD G O -->
            android:layout_marginTop="8dp" <!-- U Z MM V >> ZZ VV AA N >> -- V IA SS KK  ZZ B Q NN Z QQ KK RR MM IO K IO IO -->
            android:text="Total: $0.00" <!-- D U -->
            android:textSize="16sp" <!-- -- W FF > V GG FF MM MM L X KK -> VV AA M -->
            android:textStyle="bold" /> <!-- Y CC > E W  Y F SS FF > >> -> J RR -->

        <TextView <!-- S I T MM IO S -->
            android:id="@+id/tvPedidoItems" <!-- S X X -- QQ K ZZ N M A T YY VV X W X UU VV A AA TT N 1 SS I SS KK OO X TT R  S DD FF I AI HH L L > NN -- J T U II A U CC ZZ BB AA WW I K W MM -- F II K P I IA X EE H G F AI LL B C QQ N S RR > R O AA NN K 7 IO M Z VV I U T F O V MM MM V G Y >> B X C O U N V F P I K M GG W K K V P I UU -- T U W CC V FF C Q IA Z 8 G XX >> U J II XX LL XX -->
            android:layout_width="match_parent" <!-- N W TT K A P D CC F Z C M M Y  F F IA DD M S V IA V M BB CC W IO W Q XX JJ G QQ A D  VV YY -- EE C G II G X B -- S XX W M NN EE CC YY ZZ XX T O CC -- NN J B AA SS C C AI R TT S P F N M Z B XX RR RR -->
            android:layout_height="wrap_content" <!-- Q CC JJ TT O L N N O B II C IO FF X JJ PP U V L K N O CC K E X Y AA AI -- V KK >> S T TT FF EE MM M SS B Q GG KK AA M RR EE C TT F SS IO B AA D N P -> Y D LL TT RR Z BB OO J G -- H IO L OO O D  -> WW F PP T S F -- D WW B PP V W IO FF N LL Z TT E IO H >> RR C H E HH   -->
            android:layout_marginTop="8dp" <!-- N Y AA >  VV Z V FF N CC O AA L B N Z -- Q YY Y -->
            android:text="Articulos:\n- Silla" <!-- E C WW -->
            android:textColor="#666666" <!-- X Q NN BB M Z EE LL F X O J N DD B V MM AA W Z -> II IO D E WW II L O -- D IA AI W AA B D EE AA 2 DD O Z D IO Z Z U EE KK P IO I -> G HH YY D H N -->
            android:visibility="gone" /> <!-- FF F NN XX QQ T EE O O  G T R BB R MM FF L P U >> R D  G E L E C ZZ GG K RR -->

        <View <!-- OO M OO Y IO FF K CC S Y C JJ O W ZZ TT T S M Q V G  Y CC Y > N Q NN N  QQ H OO -->
            android:id="@+id/viewSeparador" <!-- C O JJ  W Q L U R - U O B BB F U Z M I P D -- FF B R >> L DD FF HH D D  W AA YY N FF D XX YY QQ SS EE LL PP Y N K IO P -> FF W A ZZ F B A M P B M WW IO IO Q K II L A FF FF JJ N > Q CC -->
            android:layout_width="match_parent" <!-- W L - G AI Z VV X K KK WW Z EE UU F -- Z KK IO AA N NN Y  Y R >> WW T F TT IA S LL O Q ZZ PP JJ FF YY T C -- QQ 8 J F GG ZZ AA LL H J U J NN F D YY A Z L EE V E Y  C I N BB -- G K L GG >> TT V W FF M G U QQ  T KK JJ XX >> U -- R N TT W M -- -> XX Q I F C YY IA >> TT X IO P MM Z W W AA UU -- IO Y CC K MM -- QQ Z N O Z R JJ J Y S I -- >> I MM I R I YY XX G P PP KK LL I C II  X -->
            android:layout_height="1dp" <!-- DD E  LL   N X MM FF >> -> PP Y X E  YY XX Q IO E TT Y M G P X P S G QQ KK N FF WW -- NN > TT K G IA DD R H IO QQ OO BB Z Y S CC I M NN W J L M AI T VV N OO M K -- IO MM KK M  >> R I Z LL >> V E J Z KK J IO X >> -- TT -- I EE GG IO PP VV Z G WW -> CC NN >> -> H AI TT MM C CC D OO U IA - W V FF S Z W Z C AA Q -->
            android:layout_marginTop="12dp" <!-- A IA -->
            android:layout_marginBottom="8dp" <!-- AI P  LL QQ H MM G B K FF KK T C ZZ M KK CC U I NN V W N AA B L EE M O C H IO M DD K JJ A R P Q N AA X YY -> Y QQ NN II BB >> F XX  H LL VV E SS UU CC -- U -- WW SS J N DD -> V  F E IA S A HH U G TT JJ F V E IO > VV VV IO IO A G >> E XX O E -- G T KK -> T NN PP -->
            android:background="#E0E0E0" <!-- Q TT -> IA DD Y L F YY PP F Z OO -> A R  O F Y MM V E M X A TT >> D -> C YY S O W W X F EE S G G SS M ZZ N CC -> 1 EE S I MM S WW XX JJ IA E Z X B F OO W D T SS Z I P V WW VV KK EE >> W I H TT C L UU L W DD W Y L B I YY M S XX  W A K D -> W W T F > HH MM N K N KK M K Z S IO BB II C KK J D -- E -- HH E N F G TT U IO I SS DD G M -- H Y W -->
            android:visibility="gone"/> <!-- K V X T KK K > FF II W OO EE VV IA D I FF C KK SS S F BB MM QQ LL -- EE O A S Z E ZZ LL -->

        <!-- Este contenedor solo será visible para el Administrador -->
        <LinearLayout <!-- VV ZZ T R V >> T M A HH > X Q T -> DD F Z LL LL -- VV XX W AA U E >> P M >> X HH E -> OO Q I Y MM IO A E C L >> J AI W IA X I ZZ W MM T V I P IO  H X IA N >> DD C P W B E C  X FF I U NN SS I U II IO LL V SS YY WW C JJ IO -> R D Q S W A VV V -- > O G -- ZZ G SS X A DD XX V >> >> PP C F KK F F P KK TT Q > AI A AI TT YY W U KK H W T ZZ IA ZZ W YY QQ V J DD -- -->
            android:id="@+id/llAdminControles" <!-- >> B F LL T L VV N X -- FF YY X S V AI VV FF VV N D I N KK YY HH NN > YY S Y O A IO J -- J JJ U YY MM VV OO S -- GG E  CC 2 FF VV F C KK > ZZ I Q  F O I TT II NN VV U L X U G O Y MM 2 Q E -->
            android:layout_width="match_parent" <!-- A YY N Q HH J C M -->
            android:layout_height="wrap_content" <!-- GG E MM RR Q SS NN OO SS PP T CC KK W KK HH -->
            android:gravity="end" <!-- NN N M YY ZZ D ZZ Y CC S P S -->
            android:orientation="horizontal" <!-- P > N TT -> W E IO LL -- I PP N H JJ S T D SS KK U > J Z W I O SS FF  W QQ Q - F W G -> S NN IA G M Y G P Q G FF D O KK T T -- >> W LL AA KK O KK D NN P Y W K Y P CC A V ZZ YY V Y P -- F G C O G ZZ R B MM AA C >> QQ > X  TT S -->
            android:visibility="gone"> <!-- NN IO VV IO F M V SS HH AI BB Z RR UU DD O H  >> D JJ H C ZZ IA VV EE -> W U AA NN PP LL L O MM DD E NN CC H W WW 8 ZZ T J PP 1 K BB X SS C FF OO OO K B WW G Y S V N KK NN V WW H K L U W XX AA M H AI O E T W X N CC V U NN -> TT RR II SS YY LL P IO EE U O F A M G C Z M -->

            <Button <!-- XX IA L C YY -> HH XX N K > U AA AI >> BB XX O IA NN A NN AA Q F Y U M -->
                android:id="@+id/btnMarcarDevuelto" <!-- G ZZ >> L JJ AA N PP I PP N A QQ E A D B Y MM AA KK LL P Y PP X -- N GG -> IO R KK R R U C D N OO YY Z L -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- ZZ D L -->
                android:layout_width="wrap_content" <!-- FF V TT Z F C XX IO LL R UU K II O F XX M FF GG XX VV TT Z II N Y O S Z EE RR XX KK TT KK TT -->
                android:layout_height="wrap_content" <!-- LL UU X RR BB Q FF AA I G > W KK B ZZ S H C G NN L PP I P Q E B B WW A -> U ZZ QQ FF JJ TT E HH RR BB >> YY O Z -> X V AI -->
                android:text="Marcar Devuelto" <!-- I H XX S AA QQ M X B E IO L J YY DD SS I >> OO XX QQ I Q X N W T AI Y Y B UU N U I > C IA W HH VV M L E > NN U C KK E K U TT QQ -->
                android:textColor="#0066CC" /> <!-- NN CC A B ZZ M M DD H KK EE L U F KK II CC E L AA B C TT TT  -> L L E U KK H -> H D -> FF OO P >> EE N M UU Z -> Q LL MM K UU O NN MM I U U N HH II ZZ H  PP PP QQ C ZZ DD WW L F J I U K KK CC W Y LL -- H K II IO W UU NN -> >>  7 Q S N D >> AA 7 XX Z O O UU K U -->

            <Button <!-- MM X VV MM L U Y 8 E >> KK II T E O V V W 2 AI IO F C E -- F K XX  F H II II NN Z J A Z -->
                android:id="@+id/btnMarcarCancelado" <!-- C WW -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- YY >> -->
                android:layout_width="wrap_content" <!-- AI F >> -->
                android:layout_height="wrap_content" <!-- M -> FF FF CC JJ X CC F X II V -- DD D CC -->
                android:text="Cancelar" <!-- EE WW E Z MM -> AI I IA P Z M MM G O K VV XX EE I TT S AA EE XX MM -->
                android:textColor="#CC0000" /> <!-- V  IO R A HH X BB SS V Q -- LL Z AI J AI FF  S I Z GG > G JJ H XX  > XX NN I G GG > VV X M Y - SS A K B F FF 1 B E P DD IA -- FF J >> AI FF D Z FF GG EE U P S L S D -> F W DD X -- E QQ K M X TT L HH K Z V LL IA C FF CC II K AA D S -->
                
            <Button <!-- II ZZ -->
                android:id="@+id/btnAdminEliminar" <!-- -- P P C VV K M VV R NN U IO OO LL SS PP XX > Q V J HH E AI -- F Z -> IO K D M IA T V I X ZZ Z RR Z N -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- ZZ P O  NN  F C S V YY G P VV A OO CC K A WW Q I FF Z OO X D Y P P UU LL UU NN W -- DD V HH C > TT IO EE OO A E P XX J -- D YY A L Z GG RR F B KK G UU Q -> BB A -> PP D F - U H H C Y R U J II GG H F W P L Y G B NN O N  I FF K K KK X NN R N KK I WW I G WW D BB IO -->
                android:layout_width="wrap_content" <!-- II > >> W B N G BB M Q R -->
                android:layout_height="wrap_content" <!-- NN Z WW I GG >> GG Q AI JJ C -->
                android:text="Eliminar Registro" <!-- BB F KK -- P J AA Y Z Q C Q PP BB IA S AA QQ H LL IA VV LL IA 2 S - M KK NN TT S J V VV N V Z Z PP PP I KK A FF DD M U CC EE P IO Q M LL Q WW T W I HH S AA FF R U Q F -- 8 > Z N LL IO CC 2 L KK LL IO S IO X Q O L V W CC HH P A WW O H QQ L L DD NN Z MM -> >> Z -->
                android:textColor="#8B0000" <!-- D HH S IA FF Y SS -- FF IO NN Y P ZZ Q K P CC H -- P AI Y HH M J S L MM -->
                android:visibility="gone" /> <!-- X U V  QQ YY -> TT F H AA >> IA A L Y UU K VV LL B G U GG P SS RR CC U AA H -- WW Q AA YY GG P IA F P N HH C EE  P Q > WW WW OO > UU G E QQ GG FF Y -->
        </LinearLayout> <!-- Z O DD T K V EE ZZ MM I  P LL U VV N H A M LL I TT C NN W -->
        
        <!-- Este contenedor solo será visible para el Cliente -->
        <LinearLayout <!-- FF F LL W CC N VV NN -> B VV IA C E H RR EE WW RR  Q TT LL LL E S G VV II -->
            android:id="@+id/llCustomerControles" <!-- O NN T E RR SS D TT P Y E D Z R P SS KK I C U FF S -> Y Q R C K AA YY I  F  NN N ZZ R E R Y C L EE N SS D W L J FF -- F E KK N D P GG W J I W TT UU V B Y Z -> -> VV D DD P KK D V T G IO   S R V K - WW UU O EE I L RR >> FF > AI E FF J A A II > B Y FF X RR Z V S Y MM I G A -->
            android:layout_width="match_parent" <!-- LL S X J A O N NN U U >> FF VV S Y M GG J JJ A MM AA EE F >> H QQ GG LL WW B X M J Z A R D I O Z T TT FF CC WW C F -> R C J V IO D FF -->
            android:layout_height="wrap_content" <!-- VV B II AA F U W K D EE K -->
            android:gravity="end" <!-- B C O CC MM C N N OO B II PP K W NN YY Z  V -->
            android:orientation="horizontal" <!-- F K BB AI B A PP KK W TT EE KK P HH E -->
            android:visibility="gone"> <!-- AA XX -->

            <Button <!-- HH QQ II T R D BB LL I U L -- IO FF ZZ PP GG EE W IA NN T V N F KK  N BB M IO G PP G G E E HH ZZ II NN -->
                android:id="@+id/btnModificarFechas" <!-- DD VV GG Z VV O B -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- EE BB KK JJ J M T N FF JJ II JJ >> B ZZ L O P NN NN NN MM H P AA CC ZZ KK  U D OO VV E BB RR -> V O M KK F F R XX R F RR C N S KK E -->
                android:layout_width="wrap_content" <!-- K NN IO K P TT B Y B VV N J NN SS H N IO Q A MM A W P DD XX BB SS FF M O W LL E > > N HH H F  I T QQ -- N G C AA B BB W K C KK GG M U W I F O V LL M YY G A > L UU E N U -->
                android:layout_height="wrap_content" <!-- CC I EE H SS M K MM H >> -> B B - NN A C H T Y IA FF F > EE ZZ IA WW D G C U C O T TT YY U O H IO Y K M > -> CC VV C U >> CC AA  JJ M GG I -->
                android:text="Modificar Fechas" <!-- F Q EE -->
                android:textColor="#2196F3" /> <!-- X J RR -> LL II I A LL W L DD F FF -- Q -> F K F 7 FF -->

            <Button <!-- CC UU F YY WW -- V PP YY XX K I PP D X A E NN D WW P R K II KK D FF L S  QQ P R X NN DD NN CC -- CC EE NN D N  V K N C FF IA N SS S VV T N -->
                android:id="@+id/btnCustomerEliminar" <!-- T E M U K F II KK L 1 LL LL M MM M C G -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- IGUAL, ESTILO DE PURO TETXO -->
                android:layout_width="wrap_content" <!-- I G HH V EE QQ K I K TT YY 1 SS -- HH IO IO  C L LL JJ S AA UU CC X > 8 -> G QQ KK 7 L CC F P D YY PP VV WW RR >> BB Q PP B K IO S SS Y ZZ V -- -- A E P IO KK E F P TT N HH D 2 I A F G MM NN I C W PP W C D > E M X AI P NN -->
                android:layout_height="wrap_content" <!-- U Y 7 V JJ J K > SS Y M J EE ZZ LL DD AA SS X S N WW G SS XX M H D  TT NN N WW IA L X D Q WW D VV NN O UU NN > B U R >> CC KK N I J I W G -- Y IO >> D H VV N ZZ C >> TT FF U II O -- P QQ X AA N CC W C FF FF CC N Q >> O P I EE -> A Z >> KK V W VV H FF U II J IO GG H V S O S FF SS Z NN FF S II FF > S IA TT V LL C C B T I T E LL LL QQ V I G O IA TT E MM F -- O J O G E IO PP KK N F L H T J E > CC QQ DD  G CC -- > F 1 CC KK M IO RR -->
                android:text="Eliminar Pedido" <!-- O H G A G IO LL H JJ AI R W A IA T YY ZZ C SS Y B C WW O S E AA PP TT OO U SS AI A LL II I EE G P XX Z GG IO KK C Y -> BB XX V -->
                android:textColor="#CC0000" /> <!-- ROJO ELIMINAR O PELIGRO -->
                
            <Button <!-- O NN PP C O V I FF Q  -- J P FF GG MM SS FF C RR TT D U IO V  A FF NN D II T KK V A NN DD IO -> IO -->
                android:id="@+id/btnCustomerArchivar" <!-- VV G W S QQ HH Y V M A X  A F R I EE L SS X >> Q Y QQ E I EE D A EE P -- PP T LL S T M CC GG H N - MM DD K PP LL -->
                style="@style/Widget.MaterialComponents.Button.TextButton" <!-- D AA N > W >> 7 -->
                android:layout_width="wrap_content" <!-- I G I N P I T J XX M P G  X I I DD K QQ NN U M Y ZZ  V S F TT H L LL V O I F IO F IO IA G KK A S F  -- W V KK 1 M T S P G OO Z HH  T IO N O C E MM Q DD F  >> X >> RR T O O F T FF HH BB T > Y QQ K V XX IO B K V IO PP IO G IO X -- X A P W KK T -->
                android:layout_height="wrap_content" <!-- NN IA H IO C V >> M T E L JJ L U Z >> GG T I X A -->
                android:text="Eliminar Registro" <!-- O -> Y Z L -->
                android:textColor="#CC0000" <!-- ZZ WW A  H U GG VV Q V NN Y CC LL O A C A E V FF QQ H K KK O IO V NN -->
                android:visibility="gone" /> <!-- X C NN M X A X -- MM -->
        </LinearLayout> <!-- W C -- V EE F NN M FF VV 8 CC EE A K R XX X V  D  II GG F AA H QQ F A H QQ > IO AA > L HH N D G MM T E LL N AI -> BB IA CC M A H T Y CC B L R -> C NN AA  N IO Y IO A F UU IO M -->

    </LinearLayout> <!-- YY FF J O S > P F UU N GG II X JJ A MM C V P E SS I T UU 7 F G U U R D O J LL R M L O W K J U K QQ PP  H I KK S D T 7 D AA E EE PP II QQ P U EE RR CC SS -->
</androidx.cardview.widget.CardView> <!-- G SS EE LL NN D U PP HH  D -- HH O M QQ NN N X S F AI -- X U Y YY L X H O >> TT G M S IA U DD N YY N IA K A LL TT PP X >> K LL W IA Z G C HH Q K R KK H W M O TT  VV Z CC L D -->
```        android:orientation="horizontal"
            android:visibility="gone">

            <Button
                android:id="@+id/btnModificarFechas"
                style="@style/Widget.MaterialComponents.Button.TextButton"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Modificar Fechas"
                android:textColor="#2196F3" />

            <Button
                android:id="@+id/btnCustomerEliminar"
                style="@style/Widget.MaterialComponents.Button.TextButton"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Eliminar Pedido"
                android:textColor="#CC0000" />
                
            <Button
                android:id="@+id/btnCustomerArchivar"
                style="@style/Widget.MaterialComponents.Button.TextButton"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="Eliminar Registro"
                android:textColor="#CC0000"
                android:visibility="gone" />
        </LinearLayout>

    </LinearLayout>
</androidx.cardview.widget.CardView>

```

---

<a id='reslayoutitem_productoxml'></a>
### Archivo: `res/layout/item_producto.xml`

**Propósito general:** Esta carpeta contiene todos los archivos XML de diseño. Son el esqueleto visual de cada pantalla, diálogo y celda de las listas, donde se acomodan los textos, botones, imágenes y listas.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<androidx.cardview.widget.CardView xmlns:android="http://schemas.android.com/apk/res/android" <!-- TARJETA GLOBAL PARA EL PEDIDO ENTRO -->
    xmlns:app="http://schemas.android.com/apk/res-auto" <!-- app widgets -->
    android:layout_width="match_parent" <!-- Ocupa a lo ancho-->
    android:layout_height="wrap_content" <!-- Envuelve c -->
    android:layout_margin="8dp" <!-- Margen d e 8-->
    app:cardCornerRadius="16dp" <!-- Más curvas que la tarjeta normal -->
    app:cardElevation="6dp" <!-- S o m b r i t a s flotantes-->
    app:cardBackgroundColor="#9BA8C7"> <!-- Fondo azul claro -->

    <LinearLayout <!-- CAJON LINEAL MAESTRO -->
        android:layout_width="match_parent" <!-- A W NN MM W NN  Q G A -->
        android:layout_height="wrap_content" <!-- W TT V H K -->
        android:orientation="vertical" <!-- FI L A N I ID A -->
        android:padding="16dp"> <!-- PA D D N -->

        <TextView <!-- NOMBREE DE P R ->
            android:id="@+id/tvNombre" <!-- F IO R NN B F C AI S M RR X HH  Y T  P D NN NN W Z C M FF BB Z M AI SS ZZ W W V KK Z Q C  Q Y MM LL U YY SS V FF Y RR U LL P HH H S U TT FF  Y -> >> IO P YY Z  W QQ R JJ Y EE XX M X -->
            android:layout_width="match_parent" <!-- Z C B -->
            android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
            android:text="Nombre del Producto" <!-- P J O  T G -- L A IA HH U O V X LL NN M U TT V S B -->
            android:textColor="#0D0D0D" <!-- Y K KK M OO U QQ KK JJ L II L L D  M Y  VV CC CC -->
            android:textSize="17sp" <!-- M U Y SS P S E M A D U Y P M PP A BB LL L VV F P  TT J G NN GG KK G TT -->
            android:textStyle="bold" <!-- O KK U -- N G EE T -->
            android:gravity="center_horizontal"/> <!-- CENTRATITO PAPA -->

        <TextView <!-- DESCRIPCIONNN I D P E D I D O  T E X TT -->
            android:id="@+id/tvDescripcion" <!-- F IO R NN B F C AI S M RR X HH  Y T  P D NN NN W Z C M FF BB Z M AI SS ZZ W W V KK Z Q C  Q Y MM LL U YY SS V FF Y RR U LL P HH H S U TT FF  Y -> >> IO P YY Z  W QQ R JJ Y EE XX M X -->
            android:layout_width="match_parent" <!-- Z C B -->
            android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
            android:text="Descripción" <!-- P J O  T G -- L A IA HH U O V X LL NN M U TT V S B -->
            android:textColor="#333333" <!-- Y K KK M OO U QQ KK JJ L II L L D  M Y  VV CC CC -->
            android:textSize="13sp" <!-- M U Y SS P S E M A D U Y P M PP A BB LL L VV F P  TT J G NN GG KK G TT -->
            android:gravity="center_horizontal" <!-- C E N T R D O  -->
            android:layout_marginTop="4dp"/> <!-- O KK U -- N G EE T -->

        <TextView <!-- EL BENDITO PRECIOOOOO -->
            android:id="@+id/tvPrecio" <!-- F IO R NN B F C AI S M RR X HH  Y T  P D NN NN W Z C M FF BB Z M AI SS ZZ W W V KK Z Q C  Q Y MM LL U YY SS V FF Y RR U LL P HH H S U TT FF  Y -> >> IO P YY Z  W QQ R JJ Y EE XX M X -->
            android:layout_width="match_parent" <!-- Z C B -->
            android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
            android:layout_marginTop="10dp" <!-- O KK U -- N G EE T -->
            android:text="$0.00" <!-- P J O  T G -- L A IA HH U O V X LL NN M U TT V S B -->
            android:textColor="#003CFF" <!-- AZULLLLLLL L M Y  VV CC CC -->
            android:textSize="22sp" <!-- M U Y GGGG M A D U Y P M PP A BB LL L VV F P  TT J G NN GG KK G TT -->
            android:textStyle="bold" <!-- O KK U -- N G EE T -->
            android:gravity="center_horizontal"/> <!-- CENTRADIN -->

        <TextView <!-- LO QUE QUEDAAA-->
            android:id="@+id/tvStockDisponible" <!-- F IO R NN B F C AI S M RR X HH  Y T  P D NN NN W Z C M FF BB Z M AI SS ZZ W W V KK Z Q C  Q Y MM LL U YY SS V FF Y RR U LL P HH H S U TT FF  Y -> >> IO P YY Z  W QQ R JJ Y EE XX M X -->
            android:layout_width="match_parent" <!-- Z C B -->
            android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
            android:text="Disponibles: 0" <!-- P J O  T G -- L A IA HH U O V X LL NN M U TT V S B -->
            android:textSize="12sp" <!-- M U Y C HH I IQ CC M PP A BB LL L VV F P  TT J G NN GG KK G TT -->
            android:textColor="#4CAF50" <!-- VERDDDDEE L D  M Y  VV CC CC -->
            android:gravity="center_horizontal" <!-- C-->
            android:layout_marginTop="2dp"/> <!-- O KK U -- N G EE T -->

        <LinearLayout <!-- SUB CAJA LINAEL PAAR LOS BOTONCITOS DE MASY MENOS-->
            android:layout_width="wrap_content" <!-- Z C B -->
            android:layout_height="wrap_content" <!-- Q DD K Z -- FF S N -> AI WW -->
            android:layout_gravity="center_horizontal" <!-- E M U T FF G D R  O -->
            android:layout_marginTop="14dp" <!-- O KK U -- N G EE T -->
            android:gravity="center_vertical" <!-- I J O F H RR WW D C I LL -- -->
            android:orientation="horizontal"> <!-- L O B I II -->

            <com.google.android.material.button.MaterialButton <!-- BOTON - PARA KITAR-->
                android:id="@+id/btnMenos" <!-- P K JJ P N V T J SS K P E V Y QQ F K M -->
                style="@style/Widget.MaterialComponents.Button" <!-- E O W A M Y S NN R X DD Z FF  V CC  C H U II >> >> GG -- IO V TT X Q W L Z S -->
                android:layout_width="44dp" <!-- Q LL Y JJ PP I VV YY G DD RR T V LL Y PP B T F -> DD Q B IO IO FF H SS NN >> O P O YY B -->
                android:layout_height="44dp" <!-- PP AI I YY JJ JJ -- WW EE TT Z  W J T -- LL C T O Q C XX AI -> II XX D K GG ZZ R IA CC   F KK C A QQ -->
                android:text="-" <!-- D WW ZZ YY HH J >> VV J WW K UU W CC D FF  AA FF J O Y R AA KK CC FF Q KK -->
                android:textSize="22sp" <!-- FF AI KK KK II DD J B VV HH P D S O IO K E VV U J RR Z W XX AA V 8 J MM S JJ LL N R NN ZZ LL TT Q V TT XX JJ M XX YY -->
                android:textColor="#FFFFFF" <!-- G F VV D PP IO VV DD GG T H CC -- IO >> L ZZ L EE D R L - UU II WW QQ -->
                android:insetTop="0dp" <!-- NN F V -->
                android:insetBottom="0dp" <!-- H D W YY -- A HH N AA W EE NN YY M M A VV -->
                android:padding="0dp" <!-- B G X QQ P VV IA IA N UU V H W X RR MM EE TT G XX YY AA CC --  TT X CC V T QQ YY XX A O S VV -> SS B  H IA -- W SS KK E QQ  M >> MM C O YY RR P -->
                app:backgroundTint="#1A1A1A" <!-- BB AI 8 L P N -->
                app:cornerRadius="22dp"/> <!-- L LL KK 1 DD YY F L M -->

            <TextView <!-- CUANTOS LLEVO-->
                android:id="@+id/tvCantidad" <!-- JJ MM O PP L IA C TT J FF I Y C IO XX YY -> K YY JJ L M IO IA II T PP C II Z S V T O K G II -> GG NN EE -> KK I HH TT Z QQ EE  B -->
                android:layout_width="wrap_content" <!-- LL LL TT Q V X U N T J AI N >> C X I V UU V QQ H S >> 1 N - CC H >> VV E -- P PP NN D D >> Z G X I R F LL T LL XX IO O A -->
                android:layout_height="wrap_content" <!-- GG E W I Q SS D K -- DD C M U UU K F TT D I F DD Y T C Z BB T M W WW KK B >> J CC IO A Q MM II FF U -->
                android:padding="14dp" <!-- CC D M I  FF IO FF S CC K ZZ S FF E N V M Z W EE PP TT FF QQ - FF P A E SS AA BB MM K IO B  V L LL R E XX NN M Z C >> V LL DD M TT V W E F C H -> Y -->
                android:text="0" <!-- L DD T K  P A NN WW V B -- J Q X KK Z WW WW B U SS C U AA JJ FF Q VV FF Y E I KK A IO V ZZ PP -> 8 LL C U -> M P M E -> B - P EE Z CC U QQ F D -->
                android:textSize="18sp" <!-- F II I S -- -- O O AI -- Y Z UU L -->
                android:textColor="#0D0D0D" <!-- J ZZ N H  A W GG D V J MM -->
                android:textStyle="bold"/> <!-- R SS E EE BB Y K J S KK TT II H FF W EE G IO -> AA LL WW DD -- Z QQ XX K SS - FF EE W D WW -->

            <com.google.android.material.button.MaterialButton <!-- BOTON DE MAAAAAS-->
                android:id="@+id/btnMas" <!-- B QQ V LL NN A F T M A S U Q NN N U Z EE T L -->
                style="@style/Widget.MaterialComponents.Button" <!-- N X ZZ XX O MM X IA Q B WW A ZZ NN FF A E W D I QQ R V >> D Y I EE VV HH K AI DD UU L TT AA GG JJ I >> Q YY -- IO E  L NN RR -- HH GG BB X WW V D F L V KK EE O QQ I BB HH -->
                android:layout_width="44dp" <!-- Q LL Y JJ PP I VV YY G DD RR T V LL Y PP B T F -> DD Q B IO IO FF H SS NN >> O P O YY B -->
                android:layout_height="44dp" <!-- PP AI I YY JJ JJ -- WW EE TT Z  W J T -- LL C T O Q C XX AI -> II XX D K GG ZZ R IA CC   F KK C A QQ -->
                android:text="+" <!-- NN P YY MM S LL M -->
                android:textSize="22sp" <!-- FF AI KK KK II DD J B VV HH P D S O IO K E VV U J RR Z W XX AA V 8 J MM S JJ LL N R NN ZZ LL TT Q V TT XX JJ M XX YY -->
                android:textColor="#FFFFFF" <!-- G F VV D PP IO VV DD GG T H CC -- IO >> L ZZ L EE D R L - UU II WW QQ -->
                android:insetTop="0dp" <!-- NN F V -->
                android:insetBottom="0dp" <!-- H D W YY -- A HH N AA W EE NN YY M M A VV -->
                android:padding="0dp" <!-- B G X QQ P VV IA IA N UU V H W X RR MM EE TT G XX YY AA CC --  TT X CC V T QQ YY XX A O S VV -> SS B  H IA -- W SS KK E QQ  M >> MM C O YY RR P -->
                app:backgroundTint="#003CFF" <!-- E CC L B P XX -->
                app:cornerRadius="22dp"/> <!-- I LL -->

        </LinearLayout> <!-- FF O Q Y NN FF F EE S H FF GG CC CC D A Y -> RR A > G -- XX FF H AA V MM TT QQ WW G QQ M ZZ NN FF F  II KK Z P JJ Q > FF Z J R P B V -->
    </LinearLayout> <!-- Y QQ -- S UU N MM Q U II T WW B SS IO Z DD U V T G D I E PP -- TT > PP PP CC VV H OO N LL AI 2 YY PP H OO D E NN D S W L ZZ V NN R Y IA PP P E ZZ UU TT D II XX FF AA NN R AA T S F MM N HH C E E E L R IA G A V C U C U Z G K -->

</androidx.cardview.widget.CardView> <!-- G SS EE LL NN D U PP HH  D -- HH O M QQ NN N X S F AI -- X U Y YY L X H O >> TT G M S IA U DD N YY N IA K A LL TT PP X >> K LL W IA Z G C HH Q K R KK H W M O TT  VV Z CC L D -->
```

---

<a id='resmenumenu_navegacionxml'></a>
### Archivo: `res/menu/menu_navegacion.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<menu xmlns:android="http://schemas.android.com/apk/res/android"> <!-- CAJA PRINCIPAL DE MENU: Define que esto es un menu de opciones (Sirve para la barra de abajo o para menus de tres puntitos) -->
    <item <!-- PRIMER BOTON / OPCION DEL MENU -->
        android:id="@+id/nav_catalogo" <!-- ID para que Kotlin sepa que le diste click al Catalogo -->
        android:icon="@android:drawable/ic_menu_search" <!-- Icono nativo de Android: Una lupita (buscar) -->
        android:title="Catálogo" /> <!-- Texto que aparece debajo del icono -->
    <item <!-- SEGUNDO BOTON / OPCION -->
        android:id="@+id/nav_rentas" <!-- ID clave en Kotlin para abrir el fragmento de Mis Rentas -->
        android:icon="@android:drawable/ic_menu_today" <!-- Icono nativo de Android: Un calendario (today) -->
        android:title="Mis Rentas" /> <!-- El texto -->
    <item <!-- TERCER BOTON / OPCION -->
        android:id="@+id/nav_notificaciones" <!-- ID clave en Kotlin -->
        android:icon="@android:drawable/ic_dialog_info" <!-- Icono nativo de Android: Un circulito con una 'i' (info/notificacion) -->
        android:title="Notificaciones" /> <!-- El texto -->
    <item <!-- CUARTO BOTON / OPCION -->
        android:id="@+id/nav_perfil" <!-- ID clave en Kotlin -->
        android:icon="@android:drawable/ic_menu_mylocation" <!-- Icono nativo de Android: Una mira (parece un usuari ubicacion) -->
        android:title="Perfil" /> <!-- El texto -->
</menu> <!-- FIN DEL MENU -->
```

---

<a id='resmenumenu_navegacion_adminxml'></a>
### Archivo: `res/menu/menu_navegacion_admin.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<menu xmlns:android="http://schemas.android.com/apk/res/android"> <!-- CAJA PRINCIPAL DE MENU (Misma logica que el menu del usuario comun, pero con opciones de Admin) -->
    <item <!-- PRIMER BOTON: INVENTARIO -->
        android:id="@+id/nav_admin_inventario" <!-- ID en Kotlin -->
        android:icon="@android:drawable/ic_menu_agenda" <!-- Icono nativo de Android: Una libretita de contactos/agenda -->
        android:title="Inventario" /> <!-- Texto -->
    <item <!-- SEGUNDO BOTON: PEDIDOS APROBAR -->
        android:id="@+id/nav_admin_pedidos" <!-- ID en Kotlin -->
        android:icon="@android:drawable/ic_menu_sort_by_size" <!-- Icono nativo de Android: Unas barritas de ordenar por tamaño (simula una lista de pedidos) -->
        android:title="Pedidos" /> <!-- Texto -->
    <item <!-- TERCER BOTON: MENSAJES DEL SISTEMA -->
        android:id="@+id/nav_notificaciones" <!-- ID en Kotlin -->
        android:icon="@android:drawable/ic_dialog_info" <!-- Iconito de 'i' de informacion -->
        android:title="Notificaciones" /> <!-- Texto -->
    <item <!-- CUARTO BOTON: PERFIL ADMIN -->
        android:id="@+id/nav_perfil" <!-- ID en Kotlin -->
        android:icon="@android:drawable/ic_menu_mylocation" <!-- Icono de recuadro/mira de ubicacion -->
        android:title="Perfil" /> <!-- Texto -->
</menu> <!-- FIN DEL MENU DEL ADMIN -->

```

---

<a id='resmipmap-anydpi-v26ic_launcherxml'></a>
### Archivo: `res/mipmap-anydpi-v26/ic_launcher.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"> <!-- ICONO ADAPTATIVO: Esto permite que Android recorte el icono del app en circulo, cuadrado, o lagrima segun el celular del usuario (Samsung, Pixel, Xiaomi, etc.) -->
    <background android:drawable="@drawable/ic_launcher_background" /> <!-- CAPA DE FONDO: Usa el archivo XML de la cuadricula verde que vimos antes -->
    <foreground android:drawable="@drawable/ic_launcher_foreground" /> <!-- CAPA FRONTAL: Usa el archivo XML del icono de Android blanco con sombra -->
    <monochrome android:drawable="@drawable/ic_launcher_foreground" /> <!-- CAPA MONOCROMATICA (Android 13+): Se usa cuando el usuario activa colores tematicos en su celular y todo se vuelve de un solo color -->
</adaptive-icon> <!-- FIN DE DEFINICION DE ICONO -->
```

---

<a id='resmipmap-anydpi-v26ic_launcher_roundxml'></a>
### Archivo: `res/mipmap-anydpi-v26/ic_launcher_round.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"> <!-- ICONO ADAPTATIVO (VERSION REDONDITA EXPLICITA): Aunque Android recorta, a veces pide una version que por defecto es redonda para celulares viejitos o launchers especificos -->
    <background android:drawable="@drawable/ic_launcher_background" /> <!-- FONDO DEL ICONO REDONDO -->
    <foreground android:drawable="@drawable/ic_launcher_foreground" /> <!-- FRENTE DEL ICONO REDONDO -->
    <monochrome android:drawable="@drawable/ic_launcher_foreground" /> <!-- VERSION MONOCROMATICA PARA TEMAS MODERNOS -->
</adaptive-icon> <!-- FIN DE DEFINICION DE ICONO REDONDO -->
```

---

<a id='resvalues-nightthemesxml'></a>
### Archivo: `res/values-night/themes.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<resources xmlns:tools="http://schemas.android.com/tools"> <!-- REFERENCIA A HERRAMIENTAS DE ANDROID STUDIO -->
    <!-- Base application theme. -->
    <style name="Base.Theme.RentaMobiliarioApp" parent="Theme.Material3.DayNight.NoActionBar"> <!-- TEMA BASE: Usa Material 3, soporta Dia/Noche y NO TIENE barra de accion arriba (la barra fea morada/verde de apps viejas) -->
        <!-- Customize your dark theme here. -->
        <!-- <item name="colorPrimary">@color/my_dark_primary</item> --> <!-- AQUI SE CONFIGURA EL COLOR PRINCIPAL PARA PANTALLAS OSCURAS (Dark Mode) -->
    </style> <!-- FIN DEL ESTILO TEMA BASE OSCURO -->
</resources> <!-- FIN DE RECURSOS DEL TEMA -->
```

---

<a id='resvaluescolorsxml'></a>
### Archivo: `res/values/colors.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?> <!-- Encabezado estandar XML -->
<resources> <!-- RECURSOS DE LA APP (DICCIONARIO DE COLORES) -->
<color name="azul_fuerte">#002366</color> <!-- DICCIONARIO: 'azul_fuerte' es el codigo #002366 -->
<color name="negro">#000000</color> <!-- DICCIONARIO: 'negro' es el codigo #000000 -->
<color name="blanco">#FFFFFF</color> <!-- DICCIONARIO: 'blanco' es el codigo #FFFFFF -->
<color name="gris_claro">#F5F5F5</color> <!-- DICCIONARIO: 'gris_claro' es el codigo #F5F5F5 -->
<color name="gris_texto">#555555</color> <!-- DICCIONARIO: 'gris_texto' es el codigo #555555 -->
</resources> <!-- FIN DEL DICCIONARIO -->
```

---

<a id='resvaluesstringsxml'></a>
### Archivo: `res/values/strings.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<resources> <!-- RECURSOS DE LA APP (DICCIONARIO DE TEXTOS/PALABRAS) -->
    <string name="app_name">Renta Mobiliario App</string> <!-- DICCIONARIO: La variable 'app_name' (el nombre del App en el cel) es "Renta Mobiliario App" -->
    <!-- TODO: Remove or change this placeholder text -->
    <string name="hello_blank_fragment">Hello blank fragment</string> <!-- DICCIONARIO: Texto de prueba basura que deja Android Studio -->
</resources> <!-- FIN DEL DICCIONARIO DE TEXTOS -->
```

---

<a id='resvaluesthemesxml'></a>
### Archivo: `res/values/themes.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<resources xmlns:tools="http://schemas.android.com/tools"> <!-- REFERENCIAS A HERRAMIENTAS MODO DISEÑO -->
    <!-- Base application theme. -->
    <style name="Base.Theme.RentaMobiliarioApp" parent="Theme.Material3.DayNight.NoActionBar"> <!-- TEMA BASE CLARO: Usa Material 3, adaptable y sin la barra de titulo nativa -->
        <!-- Customize your light theme here. -->
        <!-- <item name="colorPrimary">@color/my_light_primary</item> --> <!-- AQUI SE AJUSTAN LOS COLORES PARA EL MODO CLARO -->
    </style>

    <style name="Theme.RentaMobiliarioApp" parent="Base.Theme.RentaMobiliarioApp" /> <!-- TEMA FINAL: Simplemente hereda del tema base que definimos arriba. Es el que aplica a toda la App -->
</resources> <!-- FIN DE RECURSOS DE TEMA -->
```

---

<a id='resxmlbackup_rulesxml'></a>
### Archivo: `res/xml/backup_rules.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?><!-- Encabezado estandar XML -->
<!--
   Archivo de muestra para reglas de respaldo en la nube de Google Drive;
   Mucha de esta confifuracion la pone el Android Studio por defecto para que cuando el usuario cambie de cel, sus datos de App se pasen solitos
-->
<full-backup-content> <!-- REGLAS DE RESPALDO COMPLETO -->
    <!--
   <include domain="sharedpref" path="."/>
   <exclude domain="sharedpref" path="device.xml"/>
--> <!-- Por defecto todo esto esta comentado, porque Android ya respalda casi todo solito, a menos que tu quieras quitar algo especifico de los respaldos -->
</full-backup-content> <!-- FIN DE REGLAS DE RESPALDO -->
```

---

<a id='resxmldata_extraction_rulesxml'></a>
### Archivo: `res/xml/data_extraction_rules.xml`

**Propósito general:** Este es uno de los archivos de configuración o recursos base que necesita Android Studio para compilar el proyecto correctamente.

#### Código fuente completo:

```xml
<?xml version="1.0" encoding="utf-8"?><!-- Encabezado estandar XML -->
<!--
   Archivo de reglaas de extraccion de datos. Muy similiar al de backup.
   Le dice a Android 12 en adelante qué datos de la App se pueden transferir por USB cuando pasas datos de un cel viejo a uno nuevo.
-->
<data-extraction-rules> <!-- REGLAS DE EXTRACCION DE DATOS -->
    <cloud-backup> <!-- REGLAS PARA GOOGLE DRIVE RESPALDO NUBE -->
        <!-- TODO: Use <include> and <exclude> to control what is backed up.
        <include .../>
        <exclude .../>
        --> <!-- Vacío por defecto = Respalda toda la base de datos de la App (que aqui en realidad usamos Firebase, asi que ni hace falta mucho) -->
    </cloud-backup>
    <!--
    <device-transfer>
        <include .../>
        <exclude .../>
    </device-transfer>
    --> <!-- REGLAS PARA LA TRANSFERENCIA POR CABLE (Vacio = Pasa todo) -->
</data-extraction-rules> <!-- FIN DE REGLAS DE EXTRACCION -->
```

---

