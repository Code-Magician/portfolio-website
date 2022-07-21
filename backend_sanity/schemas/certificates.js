export default {
  name: "certificates",
  title: "Certificates",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "by",
      title: "By",
      type: "string",
    },
    {
      name: "imgurl",
      title: "ImgUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "issueDate",
      title: "Issue Date",
      type: "date",
    },
  ],
};
