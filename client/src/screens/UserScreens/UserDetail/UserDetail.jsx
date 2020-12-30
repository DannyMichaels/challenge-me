import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { checkContests, checkSubmissions } from "../../../utils/contestUtils";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goBack } from "../../../utils/goBack";
import Wrapper from "./styledUserDetail";
import FunOrangeLoading from "../../../components/Loading/FunOrangeLoading/FunOrangeLoading";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { getAllSubmissions } from "../../../services/submissions";
import { getAllUsers } from "../../../services/users";

export default function UserDetail({ getOneUser }) {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // const [allSubmissions, setAllSubmissions] = useState([]);
  // const [allUsers, setAllUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const getUser = await getOneUser(id);
      setUser(getUser);
      setLoaded(true);
    };
    getData();
  }, [getOneUser, id]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const userData = await getAllUsers();
  //     setAllUsers(allUsers);
  //   };
  //   fetchUsers();
  // }, [allUsers]);

  const contestsJSX = user?.contests?.map((contest) => (
    <Link
      key={contest.id}
      className="contests-link"
      to={`./../contests/${contest.id}`}
    >
      {contest?.name}
    </Link>
  ));

  // useEffect(() => {
  //   const fetchSubmissions = async () => {
  //     const submissionData = await getAllSubmissions();
  //     setAllSubmissions(
  //       submissionData?.filter((submission) => submission.user_id === user?.id)
  //     );
  //   };
  //   fetchSubmissions();
  // }, [user?.id]);

  // const foundSubmissions = () => {
  //   allSubmissions?.find((user) => user?.submission());
  // };

  // const foundSubmissions = () =>
  //   allSubmissions?.find(
  //     (submission) =>
  //       submission?.user_id === user?.id && user?.id === submission?.user_id
  //   );

  // const submissionsJSX = foundSubmissions().map((submission) => (
  //   <Link
  //     key={submission.id}
  //     className="contests-link"
  //     to={`./submissions/${submission.id}`}
  //   >
  //     {submission?.name}
  //   </Link>
  // ));

  if (!loaded) {
    return <FunOrangeLoading />;
  }

  // https://stackoverflow.com/questions/49528336/how-to-make-space-between-strings-using-concat-method-in-javascript/49528547
  let fullName = user?.first_name?.concat(" ", user?.last_name);

  return (
    <Wrapper>
      <div className="content-container">
        <div className="title-container">
          <div className="arrow-container">
            <IconButton className="arrow-icon" onClick={goBack}>
              <ArrowBackIcon className="arrow-icon" />
            </IconButton>
          </div>
          <Typography className="title">
            {!user?.image && <AccountCircleIcon className="user-icon" />}
            {fullName}
          </Typography>
          {user?.image && (
            <img className="user-image" src={user?.image} alt={user?.name} />
          )}
        </div>
        <hr className="top-hr" />
        <div className="inner-column">
          <div className="check-contests">{checkContests(user)}</div>
          <div className="contests-container">{contestsJSX}</div>
          {/* <div className="check-contests">{checkSubmissions(user)}</div> */}
          {/* <div className="contests-container">{submissionsJSX}</div> */}
        </div>
        <br />
        <br />
        <hr className="bottom-hr" />
        <div className="buttons">
          <Button variant="contained" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
