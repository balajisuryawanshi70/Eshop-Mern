import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FiUsers,
  FiSearch,
  FiCalendar,
  FiShield,
  FiUser,
  FiMail,
} from "react-icons/fi";

const AdminUsers = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/auth/users", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        setUsers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FiUsers />
              User Directory
            </h1>

            <p className="text-orange-100 mt-2">
              Manage registered users in your store.
            </p>

          </div>

          <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl">

            <p className="text-sm text-orange-100">
              Total Users
            </p>

            <h2 className="text-3xl font-bold">
              {filteredUsers.length}
            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="mt-8 flex justify-between items-center">

          <div className="relative w-full md:w-96">

            <FiSearch className="absolute left-4 top-4 text-gray-500" />

            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

          </div>

        </div>

        {/* Users Table */}

        <div className="mt-8 bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden shadow-xl">

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-800 uppercase text-sm text-gray-300">

                <tr>

                  <th className="px-6 py-4 text-left">
                    User
                  </th>

                  <th className="px-6 py-4 text-left">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left">
                    Joined
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.length > 0 ? (
                  filteredUsers.map((u) => (

                    <tr
                      key={u._id}
                      className="border-b border-gray-800 hover:bg-gray-800/50 transition"
                    >

                      {/* User */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">

                            {u.name.charAt(0).toUpperCase()}

                          </div>

                          <div>

                            <h3 className="font-semibold">
                              {u.name}
                            </h3>

                            <p className="text-gray-500 text-sm">
                              #{u._id.substring(0, 8)}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Email */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2 text-gray-300">

                          <FiMail className="text-orange-400" />

                          {u.email}

                        </div>

                      </td>

                      {/* Role */}

                      <td className="px-6 py-5">

                        <span
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${u.role === "admin"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-green-500/20 text-green-400"
                            }`}
                        >

                          <FiShield />

                          {u.role.toUpperCase()}

                        </span>

                      </td>

                      {/* Joined */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2 text-gray-300">

                          <FiCalendar />

                          {new Date(
                            u.createdAt
                          ).toLocaleDateString()}

                        </div>

                      </td>

                    </tr>

                  ))
                ) : (

                  <tr>

                    <td
                      colSpan="4"
                      className="py-20 text-center"
                    >

                      <FiUser
                        className="mx-auto text-gray-600"
                        size={60}
                      />

                      <h2 className="text-2xl font-bold mt-4">
                        No Users Found
                      </h2>

                      <p className="text-gray-500 mt-2">
                        There are currently no registered users.
                      </p>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminUsers;