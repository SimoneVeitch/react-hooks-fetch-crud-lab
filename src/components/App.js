import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App( {handleAddItem }) {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleAddItem} /> : <QuestionList />}
    </main>
  );
}

export default App;
