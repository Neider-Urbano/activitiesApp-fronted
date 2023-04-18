import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const MyCalendar = ({ data }) => {
  return (
    <div style={{ width: "1000px", height: "2000px" }}>
      <h2>Nivo Calendar</h2>
      <ResponsiveCalendar
        data={data}
        from="2021-01-08"
        to="2021-12-30"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{
          top: 40,
          right: 40,
          bottom: 40,
          left: 40,
        }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
        minValue={38}
        maxValue="auto"
        monthSpacing={5}
        onClick={(day, event) => console.log(day)}
      />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default MyCalendar;
