# Explicación Detallada del Modelo Económico de Utopía

## Resumen del Sistema

Utopía es una red de riqueza de consenso descentralizada basada en la cadena BSC, que logra el flujo y distribución automática de valor a través de contratos inteligentes. El sistema adopta la filosofía de diseño "desplegar una vez, nunca actualizar", asegurando reglas transparentes e inmutables.

### Mecanismos Centrales
- **Sistema de Piscina de Resonancia**: Cuatro dimensiones de opciones de resonancia de valor
- **Red de Consenso Regional**: Sistema de consenso de tres capas basado en flujo de valor
- **Mecanismo de Nodos de Prosperidad**: Selección semanal de los 36 principales contribuyentes de valor
- **Mecanismo de Reinicio Fénix**: Gestión automática de riesgos del sistema y herencia de valor

---

## I. Sistema de Valor de Piscina de Resonancia

### Explicación Detallada de las Dimensiones de Resonancia

| Dimensión | Entrada de Valor | Ciclo de Resonancia | Retorno de Resonancia | Tasa de Amplificación | Permisos Desbloqueados |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Primera Dimensión | 100 USDT | T+1 día | 100.5 USDT | 0.5% | Sin permisos adicionales |
| Segunda Dimensión | 1,000 USDT | T+7 días | 1,050 USDT | 5% | Permisos de consenso Zona A |
| Tercera Dimensión | 2,000 USDT | T+15 días | 2,260 USDT | 13% | Permisos de consenso Zona A+B |
| Cuarta Dimensión | 3,000 USDT | T+30 días | 3,900 USDT | 30% | Permisos de consenso Zona A+B+C |

### Reglas Importantes
1. **Limitación de Resonancia Única**: Cada dirección solo puede mantener una orden de resonancia activa a la vez
2. **Mecanismo de Liberación de Valor**: Se requiere reclamación manual después de completar la resonancia, se cuenta en el valor de red después de reclamar
3. **Modelo de Precálculo**: Todos los retornos de resonancia se determinan en el despliegue del contrato, completamente transparentes y predecibles

---

## II. Mecanismo de Red de Consenso Regional

### Reglas de División de Zonas

El sistema divide automáticamente la red de valor de los participantes en tres zonas de consenso:

**Zona A (Zona Central)**
- Definición: La línea con mayor contribución en la red de flujo de valor directo
- Cálculo: Suma de todos los valores de órdenes de resonancia activas en esta línea

**Zona B (Zona Halo)**
- Definición: La línea con la segunda mayor contribución en la red de flujo de valor directo
- Cálculo: Suma de todos los valores de órdenes de resonancia activas en esta línea

**Zona C (Zona Galaxia)**
- Definición: Todas las demás líneas de flujo de valor excepto Zonas A y B
- Cálculo: Suma de valores de órdenes de resonancia activas para todas las líneas restantes

### Fórmulas de Cálculo de Consenso Regional

**Compartición de Consenso Zona A**
- Base de Consenso: Ganancias diarias de resonancia de la persona directamente conectada a Zona A (no toda la Zona A)
- Proporción de Consenso: 30%
- Ejemplo: El conector directo de Zona A participa con 3000 USDT (cuarta dimensión), ganancias diarias 30 USDT, usted recibe 9 USDT/día

**Compartición de Consenso Zona B**
- Base de Consenso: Suma de ganancias diarias de resonancia para todos los participantes en la línea de Zona B
- Proporción de Consenso: 10%
- Ejemplo: Las ganancias diarias totales de la línea Zona B son 500 USDT, usted recibe 50 USDT/día

**Compartición de Consenso Zona C**
- Base de Consenso: Suma de ganancias diarias de resonancia para todos los participantes en líneas de Zona C
- Proporción de Consenso: 15%
- Ejemplo: Las ganancias diarias totales de todas las líneas de Zona C son 1000 USDT, usted recibe 150 USDT/día

### Requisitos de Permisos por Dimensión
- **Segunda Dimensión**: Solo puede recibir compartición de consenso Zona A
- **Tercera Dimensión**: Puede recibir compartición de consenso Zona A+B
- **Cuarta Dimensión**: Puede recibir toda la compartición de consenso Zona A+B+C

### Explicación del Flujo de Valor en Tiempo Real
1. La división de zonas se basa en las contribuciones de valor de órdenes de resonancia activas en tiempo real, con ajuste dinámico
2. Después de que un participante completa la resonancia, su contribución de valor se elimina inmediatamente de la red
3. Después de que un participante crea nueva resonancia, su contribución de valor se añade inmediatamente al cálculo de red

---

## III. Distribución de Valor de Nodos de Prosperidad

### Criterios de Selección
- **Indicador de Selección**: Contribución total de valor en tiempo real de Zona C de los participantes
- **Cuota de Selección**: Top 36
- **Ciclo de Selección**: Selección automática cada lunes

### Fuente y Distribución de la Piscina de Prosperidad
- **Fuente de Piscina de Prosperidad**: 20% de las ganancias diarias de resonancia de toda la red, acumuladas diariamente en la piscina
- **Tiempo de Distribución**: Liquidación de la piscina de prosperidad de la semana pasada cada lunes
- **Método de Distribución**: Distribución ponderada según la proporción de contribución de valor de Zona C de los 36 nodos

### Ejemplo de Cálculo
```
Compartición del Nodo = Total de Piscina de Prosperidad Semanal × (Contribución Personal de Valor Zona C ÷ Suma de Contribuciones de Valor Zona C de 36 Nodos)
```

---

## IV. Mecanismo de Reinicio Fénix

### Condiciones de Activación
Cuando fondos disponibles del sistema < retornos totales de resonancia vencidos del día, se activa automáticamente el reinicio Fénix

### Proceso de Reinicio

**Fase 1: Bloqueo del Sistema**
- El sistema entra en período de protección de 3 días
- Suspender todas las operaciones de entrada y salida de valor
- Registrar los últimos 36 participantes de cuarta dimensión

**Fase 2: Herencia de Valor**
La piscina de fondos restante se distribuye según las siguientes proporciones:
- **10%**: Distribuido equitativamente a los últimos 36 participantes de cuarta dimensión (recompensa puente)
- **90%**: Transferido a la piscina de prosperidad continua

**Fase 3: Inicio del Nuevo Ciclo**
- Reinicio del sistema, inicio de nuevo ciclo de resonancia
- Todos los participantes pueden reiniciar la resonancia de valor

### Plan de Prosperidad Continua

En el nuevo ciclo, el 90% del valor heredado se distribuirá a través de 4 selecciones:

| Tiempo de Selección | Proporción de Distribución | Criterio de Selección |
|:---:|:---:|:---:|
| Semana 4 | 10% de la piscina total | Top 36 contribuyentes de valor Zona C esa semana |
| Semana 8 | 20% de la piscina total | Top 36 contribuyentes de valor Zona C esa semana |
| Semana 12 | 30% de la piscina total | Top 36 contribuyentes de valor Zona C esa semana |
| Semana 16 | 40% de la piscina total | Top 36 contribuyentes de valor Zona C esa semana |

**Nota**: Cada selección se realiza independientemente, basada en la contribución de valor en tiempo real de la semana actual, no en contribuciones acumulativas

---

## V. Reglas del Período de Ganancias de Resonancia

### Cálculo del Ciclo de Resonancia T+N
- **Día T**: Día de creación de resonancia, no genera ganancias
- **T+1 a T+N**: Período normal de ganancias, genera compartición de consenso regional
- **Después del Día T+N**: Resonancia completada, generación de ganancias se detiene

### Notas Importantes
1. Toda compartición de consenso regional solo se genera durante el período de ganancias de órdenes de resonancia subordinadas
2. En estado de resonancia completada no reclamada, no se cuenta en ninguna contribución de valor y cálculo de red
3. Los participantes deben reclamar resonancia completada y crear nuevas para continuar participando en el flujo de valor

---

## VI. Parámetros Técnicos

### Parámetros de Cadena
- **Blockchain**: BSC (Binance Smart Chain)
- **Estándar de Token**: USDT (BEP-20)
- **Tarifas de Gas**: A cargo de los usuarios, aproximadamente 0.001-0.003 BNB/transacción
- **Características del Contrato**: No actualizable, sin permisos de administrador

### Estándares de Tiempo
- **Zona Horaria Unificada**: UTC+8 (Hora de Singapur)
- **Hora de Liquidación Diaria**: Diariamente a las 00:00
- **Hora de Liquidación Semanal**: Cada lunes a las 00:00

---

## VII. Proceso de Participación

### Proceso de Operación Básico
1. **Fase de Preparación**
   - Preparar USDT de cadena BSC
   - Preparar pequeña cantidad de BNB como tarifas de gas

2. **Fase de Resonancia**
   - Seleccionar dimensión de resonancia
   - Llamar función createOrder del contrato
   - Transferir USDT a la piscina de resonancia

3. **Fase de Cosecha**
   - Esperar completación de resonancia
   - Llamar función claimOrder para reclamar
   - Decidir si continuar resonancia

### Puntos Clave de Construcción Comunitaria
1. **Construcción de Red**: Priorizar el desarrollo de conexiones directas de alta calidad, formando zonas ABC estables
2. **Selección de Dimensión**: Se recomienda a miembros centrales elegir cuarta dimensión para todos los permisos de consenso
3. **Competencia de Nodos**: Monitorear clasificación de contribución total de valor Zona C, esforzarse por top 36

---

## VIII. Advertencia de Riesgos

### Riesgos Operacionales
- **Error de Dirección**: La pérdida de fondos por dirección de transferencia incorrecta es irrecuperable
- **Pérdida de Clave Privada**: La pérdida de clave privada significa pérdida permanente del control de cuenta
- **Riesgos de Phishing**: Sitios web oficiales falsos o direcciones de contrato

---

## IX. Explicación de Terminología Profesional

**Orden de Resonancia Activa**: Orden de resonancia creada pero no completada o no reclamada

**Línea de Flujo de Valor**: Toda la rama de red subordinada comenzando desde un conector directo específico

**Contribución de Valor en Tiempo Real**: Suma de todos los valores de órdenes de resonancia actualmente activas

**Período de Ganancias de Resonancia**: Período de tiempo desde el segundo día después de la creación de orden hasta la fecha de vencimiento

**Constructor de Puente**: Los últimos 36 participantes de cuarta dimensión antes del reinicio Fénix

**Tasa de Amplificación de Resonancia**: Porcentaje de crecimiento diario de valor

**Consenso Regional**: Mecanismo de incentivos multicapa basado en red de flujo de valor

---

## X. Verificación de Seguridad

- Solo obtener direcciones de contrato a través de canales oficiales
- El código del contrato es de código abierto, verificable en BSCScan
- Cuidado con las falsificaciones, verificar fuentes de información

---