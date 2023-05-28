import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";

interface ArticleCardInfo {
  link: string;
  title: string;
  shortDesc: string;
  img: string;
}

function ArticleCard({ article }) {
  return (
    <Card>
      <Card.Img variant="top" src={article.img} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.shortDesc}</Card.Text>
        <Button variant="link" style={{ float: "right" }}>
          Read more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function Articles() {
  const articles = [
    {
      link: "",
      title: "Article-1",
      shortDesc: "This article is in Head First series",
      img: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/24145013/article-writing.jpg",
    },
    {
      link: "",
      title: "Article-2",
      shortDesc: "This article is in Head First series",
      img: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/24145013/article-writing.jpg",
    },
    {
      link: "",
      title: "Article-3",
      shortDesc: "This article is in Head First series",
      img: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/24145013/article-writing.jpg",
    },
  ];

  return (
    <CardGroup>
      {articles.map((article, index) => {
        return <ArticleCard article={article} key={index} />;
      })}
    </CardGroup>
  );
}
