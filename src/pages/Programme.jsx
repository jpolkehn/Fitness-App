import { useQuery, gql } from "@apollo/client";
import Navigation from "../components/Navigation";

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
    <>
      <div>
        <div className="text-white text-3xl m-6 text-decoration-line: underline">
          Programme:{" "}
        </div>
        <br></br>

        {data.programs.map((program, index) => (
          <div className="text-white m-6 text-3xl " key={program.id}>
            <div className="mb-16 text-center">
              {/* Apply the gradient class based on index */}
              <button className="h-24 w-64 rounded-xl text-black bg-gradient-to-br from-fitness-color-turkis to-fitness-color-light-green">
                <a href="#">{program.name}</a>
              </button>
            </div>
            <div>
              <Navigation />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Programme;
