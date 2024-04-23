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

  return (
    <>
      <div>
        <div className="text-white text-3xl m-6 text-decoration-line: underline">
          Programme:{" "}
        </div>
        <br></br>

        {data.programs.map((program) => (
          <div className="text-white m-6 text-3xl " key={program.id}>
            <div className="mb-16 text-center">
              <button className="h-24 w-64 bg-emerald-100 rounded-xl text-blue-950">
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
