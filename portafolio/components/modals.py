import reflex as rx
from portafolio.styles.styles import Size, glassmorphism
from portafolio.components.links import link

def modal(view: rx.Component) -> rx.Component:
    d : dict = {
        "link": "https://github.com/edimez14/space-shooter",
        "github": "https://github.com/edimez14/space-shooter",
    }
    return rx.dialog.root(
        rx.dialog.trigger(view),
        rx.dialog.content(
            rx.dialog.title("Welcome to Reflex!"),
            rx.flex(
                *[
                    rx.badge(
                        rx.box(class_name="devicon-godot-plain"),
                        "Godot Engine 3.5",
                        color_scheme="gray"
                    )
                    for technology in range(5)
                ],
                wrap="wrap",
                spacing=Size.SMALL.value
            ),       
            rx.dialog.description(
                rx.markdown(r"""
                El chocolate es un alimento delicioso y versátil que ha sido apreciado por siglos en diversas culturas del mundo. Su sabor irresistible y su textura suave lo convierten en una de las golosinas más consumidas, pero más allá de su disfrute culinario, el chocolate posee una amplia gama de beneficios tanto para la salud como para el bienestar emocional.  

                ## Beneficios del Chocolate  

                ### 1. **Rico en Antioxidantes**  
                Uno de los principales beneficios del chocolate, especialmente el chocolate negro, es su alto contenido de antioxidantes. Los flavonoides y polifenoles presentes en el cacao ayudan a combatir los radicales libres en el cuerpo, reduciendo el daño celular y contribuyendo a la prevención del envejecimiento prematuro.  

                Este efecto antioxidante también está vinculado a la reducción del riesgo de enfermedades cardiovasculares, ya que el consumo moderado de chocolate negro puede mejorar la circulación sanguínea, reducir la presión arterial y disminuir el riesgo de enfermedades del corazón.  

                ### 2. **Mejora el Estado de Ánimo**  
                El cacao contiene compuestos que estimulan la producción de serotonina y endorfinas en el cerebro, neurotransmisores responsables de generar sensaciones de felicidad y bienestar.  

                Por esta razón, el chocolate es comúnmente utilizado como un alimento reconfortante en momentos de estrés o tristeza, proporcionando una sensación de placer y relajación casi inmediata.  

                ### 3. **Beneficios para la Función Cerebral**  
                Desde el punto de vista cognitivo, el chocolate también tiene efectos positivos en la función cerebral. Gracias a su contenido de flavonoides y cafeína en pequeñas cantidades, el consumo de chocolate puede mejorar la concentración, la memoria y la agilidad mental.  

                Algunos estudios sugieren que el cacao puede tener un impacto beneficioso en la prevención del deterioro cognitivo asociado con la edad, ayudando a mantener la salud del cerebro a largo plazo.  

                ### 4. **Mejora la Salud de la Piel**  
                Los antioxidantes del chocolate pueden contribuir a una apariencia más saludable y juvenil. Se ha demostrado que el cacao mejora la hidratación y elasticidad de la piel, protegiéndola de los daños causados por los rayos UV y otros factores ambientales.  

                Algunos productos cosméticos utilizan extracto de cacao en sus formulaciones debido a sus propiedades nutritivas y revitalizantes.  

                ### 5. **Fuente de Energía Natural**  
                El chocolate es una excelente fuente de energía, gracias a su contenido de carbohidratos, grasas saludables y pequeñas cantidades de cafeína y teobromina.  

                Esto lo convierte en un alimento ideal para quienes necesitan un impulso de energía, ya sea antes de una actividad física o en momentos de fatiga mental. Muchos deportistas incluyen chocolate negro en sus dietas para mejorar su rendimiento y favorecer la recuperación muscular después del ejercicio.  

                ### 6. **Favorece la Salud Intestinal**  
                El cacao contiene fibra dietética que favorece el buen funcionamiento del sistema digestivo, promoviendo el crecimiento de bacterias beneficiosas en la microbiota intestinal.  

                Esto puede traducirse en una mejor digestión, una mayor absorción de nutrientes y una reducción de la inflamación en el tracto digestivo.  

                ### 7. **Importancia Cultural y Social**  
                Desde un punto de vista social y cultural, el chocolate ha sido un símbolo de celebración, amor y gratitud a lo largo de la historia. Se ha utilizado en rituales, festividades y como un obsequio especial en diversas ocasiones.  

                Su capacidad para generar placer y su asociación con momentos felices lo convierten en un alimento con un profundo impacto emocional y simbólico.  

                ## Conclusión  
                A pesar de todos estos beneficios, es importante recordar que no todos los chocolates son iguales. Para aprovechar al máximo sus propiedades saludables, es recomendable consumir chocolate con un alto porcentaje de cacao, preferiblemente por encima del 70 %, y evitar aquellos que contienen grandes cantidades de azúcar y aditivos artificiales.  

                En conclusión, el chocolate no solo es un placer para el paladar, sino que también ofrece una gran cantidad de beneficios para la salud física y mental. Desde mejorar el estado de ánimo y la función cerebral hasta proteger el corazón y la piel, el chocolate puede ser un aliado poderoso cuando se consume de manera moderada y en su forma más pura.  

                Sin duda, se trata de un alimento que, además de deleitar los sentidos, puede aportar un valor significativo al bienestar general.
                """),
                margin_buttom="16px",
            ),
            link(d),
            rx.dialog.close(
                rx.button("Close Dialog", size="1"),
                margin_top="16px",
            ),
            # spacing=Size.DEFAULT.value
        ),
        style=glassmorphism, 
    )