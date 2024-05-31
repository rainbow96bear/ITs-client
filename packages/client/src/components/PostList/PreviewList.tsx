import { useNavigate } from "react-router-dom";
import { Box, Item } from "./PreviewList.style";
import { boardRootRouter } from "src/constant/Category";

interface Post {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  content: string;
}

interface PreviewList {
  category: string;
  posts: Post[];
}
const PreviewList: React.FC<PreviewList> = ({ category, posts }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <h3>{category}'s</h3>
      {posts.map((post, index) => (
        <Item key={index}>
          <div
            onClick={() =>
              navigate(
                boardRootRouter + "/" + category + "/" + post.subCategory
              )
            }>
            {"[" + post.subCategory + "]"}
          </div>
          <div
            onClick={() =>
              navigate(
                boardRootRouter +
                  "/" +
                  category +
                  "/" +
                  post.subCategory +
                  "/" +
                  post.id
              )
            }>
            {post.title}{" "}
          </div>
        </Item>
      ))}
    </Box>
  );
};
export default PreviewList;
