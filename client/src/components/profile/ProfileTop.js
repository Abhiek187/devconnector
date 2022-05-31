import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt={`${name}'s avatar`} />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status}
        {company.length > 0 && <span> at {company}</span>}
      </p>
      <p>{location.length > 0 && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website.length > 0 && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social !== undefined && social.twitter.length > 0 && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x" />
          </a>
        )}
        {social !== undefined && social.facebook.length > 0 && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x" />
          </a>
        )}
        {social !== undefined && social.linkedin.length > 0 && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x" />
          </a>
        )}
        {social !== undefined && social.youtube.length > 0 && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x" />
          </a>
        )}
        {social !== undefined && social.instagram.length > 0 && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x" />
          </a>
        )}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
