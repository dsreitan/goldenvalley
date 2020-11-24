export default {
  name: "topic",
  title: "Tema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "learningModules",
      title: "Læringsmoduler",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "learningModule" }],
        },
      ],
    },
  ],
};
