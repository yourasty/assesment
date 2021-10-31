import React from "react";
import { useSelector } from "react-redux";
import MaterialTable from "material-table";

export default function Users() {
  const users = useSelector((state) => state.users.data);

  let userList = [];
  // create user list

  Object.keys(users).forEach((key) => {
    const tempAddr = users[key].address;
    const tempComp = users[key].company;
    const address = `Full address: ${tempAddr.street} ${tempAddr.suite}, ${tempAddr.zipcode} ${tempAddr.city}, geo: ${tempAddr.geo.lat} , ${tempAddr.geo.lng}`;
    const company = `Company: ${tempComp.name},  catchPhrase: ${tempComp.catchPhrase}, bs: ${tempComp.bs}`;

    userList.push({
      id: users[key].id,
      name: users[key].name,
      username: users[key].username,
      email: users[key].email,
      address: users[key].address.city,
      phone: users[key].phone,
      website: users[key].website,
      company: users[key].company.name,
      companyDetails: company,
      addressDetails: address,
    });
  });

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={[
          { title: "ID", field: "id" },
          { title: "name", field: "name" },
          { title: "username", field: "username" },
          { title: "email", field: "email" },
          { title: "address", field: "address" },
          { title: "phone", field: "phone" },
          { title: "website", field: "website" },
          { title: "company", field: "company" },
        ]}
        data={userList}
        detailPanel={[
          {
            tooltip: "Show details",
            render: (rowData) => {
              return (
                <div>
                  <ul>
                    <li>{rowData.addressDetails}</li>
                    <li>{rowData.companyDetails}</li>
                  </ul>
                </div>
              );
            },
          },
        ]}
        title="Users"
        options={{
          pageSize: userList.length,
          pageSizeOptions: [
            Math.trunc(userList.length / 3),
            Math.trunc(userList.length / 2),
            userList.length,
          ],
        }}
      />
    </div>
  );
}
