
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
          content: `
          color=cl
          TOYSTORE:juguetería.Pproductos:
            1.Oso de peluche,cl blanco/negro.
            2.Tractor en miniatura,cl amarillo.
            3.Ukelele,cl marron.
            Horario lun/vie,8/17hs
            Sebastian/Dario:duenos tienda.`,
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
  "Hola ,yo trabajo de 6 am a 6pm , en que horario puedo pasar ?? "
);
