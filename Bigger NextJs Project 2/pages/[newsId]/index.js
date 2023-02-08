const newsDetails = () => {
  const detailData = [
    {
      title: "ReactJs is a JavaScript Library for JavaScript applications",
      source: "Wikipedia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",
    },
  ];
  return (
    <>
      <img src={detailData.image}/>
      <h1>{detailData.title}</h1>
      <address>{detailData.source}</address>
      <p>{detailData.description}</p>
    </>
  );
};
export default newsDetails;
