export default {
  name: "productGroup",
  title: "Produktgruppe",
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
      name: "productVariants",
      title: "Produktvarianter",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "productVariant" }],
        },
      ],
    },
  ],
};
