import PropTypes from "prop-types";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deleteEducation } from "../../actions/profile";
import formatDate from "../../utils/formatDate";

const Education = ({ education }) => {
  const dispatch = useDispatch();

  // education = the education section of the profile
  // educations = all the schools listed in the user's profile
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td className="hide-sm">
        {formatDate(edu.from)} - {edu.current ? " Now" : formatDate(edu.to)}
      </td>
      <td>
        <button
          onClick={() => dispatch(deleteEducation(edu._id))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
