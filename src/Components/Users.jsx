const users = ["Kimani", "Raphael", "Michelle", "Salah", "Messi"];



export const Users = () => {
  return (
    <div>
      <ol id="users ">
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ol>
    </div>
  );
};
