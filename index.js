
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey:
    "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",
});

async function consultarTienda(preguntaUsuario) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // Corregido el nombre del modelo
      messages: [
        {
          role: "system",
          content: `TOYSTORE es una juguetería con una variedad de juguetes. Ofrecemos los siguientes productos:
            1. Un oso de peluche, disponible en color blanco o negro.
            2. Un tractor en miniatura, disponible en color amarillo.
            3. Un ukelele, disponible en colores marron.
            
            Nuestro horario de atención es de lunes a viernes, de 8 a 17 hs.
            Sebastian y Dario son los duenos de la tienda, y estan a disposicion para hablar contigo.`,
        },
        {
          role: "user",
          content: preguntaUsuario,
        },
      ],
    });

    // Imprime solo la respuesta una vez
    console.log("\nRespuesta de la tienda:");
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Ejecutar la función con una pregunta
consultarTienda(
  "yo trabajo de 6 am a 6pm , en que horario puedo pasar ? "
);
