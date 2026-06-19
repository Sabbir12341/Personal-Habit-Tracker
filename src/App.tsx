import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import { Habitlist } from "./components/Habitlist";
import HabitProviders from "./components/HabitProviders";
import { useState } from "react";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
export default function App() {
 const [weekOffSet,setWeekOffSet]=useState(0);
 const week=addWeeks(new Date(),weekOffSet)
 const visibleDates=eachDayOfInterval({
     start: startOfWeek(week, { weekStartsOn: 1 }),
     end: endOfWeek(week, { weekStartsOn: 1 }),
   }); 
  return (
    <div  className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <HabitProviders>
      <Header visibleDates={visibleDates} 
      onNext={()=>setWeekOffSet(c=>c+1)}
      onPrev={()=>setWeekOffSet(c=>c-1)}
      
      />
      <HabitForm />
      <Habitlist visibleDates={visibleDates}/>
      </HabitProviders>
    </div>
  );
}

