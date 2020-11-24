export default {
  name: "productVariant",
  title: "Produktvariant",
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
      name: "learningPaths",
      title: "Læringsstier",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "learningPath" }],
        },
      ],
    },
  ],
};
