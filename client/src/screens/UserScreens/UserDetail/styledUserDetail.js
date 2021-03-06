import styled from "styled-components";
import { grey, yellow, blue } from "@material-ui/core/colors";

const Wrapper = styled.div`
  background: ${({ darkMode }) => (darkMode === "dark" ? grey[800] : "#fff")};
  .content-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 30px;
    }
  }
  .title-container {
    align-self: center;
    margin-top: 40px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .title {
    font-size: 1.6rem;
    font-size: clamp(1.5rem, 4vw, 40px);
    padding-top: 20px;
  }
  .arrow-container {
    position: absolute;
    left: 0;
    padding: 10px;
    top: 0;
  }
  .arrow-icon {
    font-size: clamp(30px, 10vw, 60px);
    padding: 1px;
  }
  .user-icon {
    margin-right: 10px;
    margin-bottom: -2px;
    font-size: clamp(20px, 10vw, 35px);
  }
  .user-image {
    height: 150px;
    width: 150px;
    width: clamp(50px, 100px, 150px);
    height: clamp(50px, 100px, 150px);
    align-self: center;
    margin: 10px;
    border: 1px solid white;
    border-radius: 50%;
    object-fit: cover;
  }
  .inner-column {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    min-height: 400px;
    color: ${({ darkMode }) => (darkMode === "dark" ? grey[100] : "#000")};
  }
  .contests-container {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }
  .contests-container::-webkit-scrollbar {
    display: none;
  }
  .check-contests {
    margin-bottom: 20px;
    font-size: clamp(0.9rem, 2vw, 2vh);
  }

  .submissions-container {
    display: flex;
    flex-direction: column;
    max-height: 450px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
  }
  .submissions-container::-webkit-scrollbar {
    display: none;
  }
  .check-submissions {
    margin-bottom: 20px;
    font-size: clamp(0.9rem, 2vw, 2vh);
  }
  .edit {
    margin-right: 10px;
  }
  .top-hr {
    margin-top: 20px;
  }

  a {
    color: ${({ darkMode }) => (darkMode === "dark" ? yellow[700] : blue[600])};
    text-decoration: none;
    overflow-wrap: break-word;
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
    padding: 1.7px;
    font-family: "montserrat", sans-serif;
  }
  a:hover {
    text-decoration: underline;
  }
  .contests-link {
    transition: transform 300ms ease-in-out;
  }
  .contests-link:hover {
    transition: transform 300ms ease-in-out;
    cursor: pointer;
    transform: translateY(-1.06px);
  }
  @media screen and (min-width: 1024px) {
    .user-image {
      height: 150px;
      width: 150px;
    }
  }
`;
export default Wrapper;
