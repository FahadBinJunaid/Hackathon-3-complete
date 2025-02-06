export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        { name: "width", title: "Width", type: "string" },
        { name: "height", title: "Height", type: "string" },
        { name: "depth", title: "Depth", type: "string" },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string"
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: { source: "name", maxLength: 96 },
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
