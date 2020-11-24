export default {
  name: "topicGroup",
  title: "Temagruppe",
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
      name: "topics",
      title: "Tema",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "topic" }],
        },
      ],
    },
  ],
};
