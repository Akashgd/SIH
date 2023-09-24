let projects = null;

const obj = {
  headers: {
    "x-access-token":


      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTA4N2ZkYjNiYWU4NThhNDViMzgxNzAiLCJpYXQiOjE2OTU1MzI1OTcsImV4cCI6MTY5NTYxODk5N30.pFTx9Dkswf_KnxXbIcpVgnEaeazEp3jjy56C9ZIBN-4"

  },
};

const fetchData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3400/dashboard", {
      method: "GET",
      headers: obj.headers,
    });

    if (res.ok) {
      projects = await res.json();
      return projects;
    } else {
      console.log("Error:", res.statusText);
      projects = null;
      return projects;
    }
  } catch (err) {
    console.error(err);
    projects = null;
    return projects;
  }
};

projects = await fetchData();
console.log(projects.data);
export default projects.data;
