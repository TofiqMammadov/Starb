import { Link } from "react-router-dom";
const HomeNote = () => {
  return (
    <div className="note">
      <div className="note-content">
        <p>
          At participating stores. Some restrictions apply. Linking bonus open
          to new members only. For full details, visit
          <Link
            to={{ pathname: "http://deltastarbucks.com/terms" }}
            target="_blank"
          >
            http://deltastarbucks.com/terms.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeNote;
