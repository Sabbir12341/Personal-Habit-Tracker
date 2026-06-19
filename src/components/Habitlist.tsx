import { eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, startOfWeek, subDays } from "date-fns";
import { Button } from "./Button";
import { useHabits } from "./HabitProviders";
import { type Habit } from "./HabitProviders";

type HabitListprops={
  visibleDates: Date[]
}
export function Habitlist({ visibleDates } : HabitListprops) {
  const { habits }= useHabits();

  if(habits.length === 0) {
    return <h1 className="text-center text-zinc-500 py-12">No habits yet.Add one above to get started!</h1>
  }
  return (
   <div className="flex flex-col gap-3">
     {
        habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates}/>
        ))
     }
   </div>
  )
}
type HabitItemProps={
  habit: Habit;
  visibleDates: Date[]
}

function HabitItem({ habit, visibleDates } : HabitItemProps) {
  const {  deletehabit, togglehabit}= useHabits();

  const streak = getStreak(habit.completions);
       return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
           <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
             <span className="font-medium">{habit.name}</span>
             { streak!==0 && (<span className="text-sm text-amber-400">🔥{streak}</span>)}
             
            </div>
            <Button onClick={() => deletehabit(habit.id)} variant="ghost destractive" className="rounded-lg px-3 py-1 text-sm">
              delete
            </Button>
           </div>
           <div className="flex gap-1.5">
              {visibleDates.map(dates => (
               <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" key={dates.toISOString()} disabled={isFuture(dates)} 
               variant={habit.completions.some(d => isSameDay(d, dates)) ? "primary" : "secondary"}
               onClick={() => togglehabit(habit.id, dates)}
               > 
                <span className="font-medium">{format(dates,'EEE')}</span>
                <span>{format(dates,'d')}</span>
               </Button>                                                                                                                                                       
              ))}
           </div>
       </div>
}

function getStreak(completions: Date[]) {
   let streak=0;
   let date = new Date();
   while(completions.some(d => isSameDay(d, date))) {
    streak++;
    date = subDays(date, 1);
   }
   return streak;
 }