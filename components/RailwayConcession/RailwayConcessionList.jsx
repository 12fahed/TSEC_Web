import RailwayConcessionCard from "./RailwayConcessionCard";
import styles from "./RailwayConcession.module.css";

const RailwayConcessionList = ({ Enquiries, fetchAllEnquiries }) => {
  const concessionRequest = Enquiries || [];

  return (
    <div className={styles.scrollContainer}>
      {concessionRequest.length > 0 ? (
        concessionRequest.map((request, index) => (
          <RailwayConcessionCard key={index} request={request} fetchAllEnquiries={fetchAllEnquiries} />
        ))
      ) : (
        <h4>No requests found</h4>
      )}
    </div>
  );
};


export default RailwayConcessionList;