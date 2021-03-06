import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Service from '../Appointment/Service'
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment , setTreatment] = useState(null)
  const formattedDate = format(date, 'PP');

  const {data:services,isLoading,refetch} = useQuery(['available',formattedDate], ()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json()
      )
      )
  if (isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data)
  //     // console.log(data)
  //     }
  //     );
  // }, [formattedDate]);
  return (
    <div className="my-20">
      <h4 className="text-xl text-secondary text-center tet-bold">
     
        Available Appointments on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {
          services?.map(service=> <Service
          key={service._id}
          service={service}
          setTreatment = {setTreatment}
          
          ></Service>)

        }
      </div>
    {
      treatment &&  <BookingModal
       treatment={treatment}
       date={date}
       setTreatment={setTreatment}
       refetch={refetch}
       ></BookingModal>
    }
    </div>
  );
};

export default AvailableAppointments;
