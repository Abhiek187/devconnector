import PropTypes from "prop-types";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

const Experience = ({ experience }) => {
  const dispatch = useDispatch();

  // experience = the experience section of the profile
  // experiences = all the experiences listed in the user's profile
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td className="hide-sm">
        {formatDate(exp.from)} - {exp.current ? " Now" : formatDate(exp.to)}
      </td>
      <td>
        <button
          onClick={() => dispatch(deleteExperience(exp._id))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
