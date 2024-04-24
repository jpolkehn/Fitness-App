import { useQuery, gql } from "@apollo/client";
import Navigation from "../components/Navigation";
import OverviewButton from "../components/OverviewButton";
import getNextClass from "../components/colorWheel";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      description
      focus
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

function Programme() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  // Define the array of gradient classes in the desired order

  return (
    <div className="p-4">
      <h1 className="mb-32 text-white text-3xl pb-">Programme</h1>
      <div className="text-center mb-16">
        {data.programs.map((program) => (
          <OverviewButton
            key={program.id}
            title={program.name}
            className={getNextClass()}
          />
        ))}
        <Navigation />
      </div>
    </div>
  );
}

export default Programme;
