import { createContext, useContext, type ReactNode  } from "react";
import { isSameDay } from 'date-fns';
import { useLocalStorage } from "./Hooks/LocalStorage";

export type Habit = {
  id: number;
  name: string;
  completions: Date[];
}

type context={
  habits: Habit[];
  addhabit: (name: string) => void;
  deletehabit: (id: number) => void;
  togglehabit: (id: number, date: Date) => void;
}
export const HabitContext = createContext<null | context>(null);

type HabitprovidersProps = {
  children: ReactNode;
}

function HabitProviders({ children}: HabitprovidersProps) {
        const [habits, setHabits] = useLocalStorage<Habit[]>("Habits",[])
           function addhabit(name: string) {
             setHabits((prev: Habit[]) => [...prev, { id: Date.now(), name, completions: [] }])
           }
         function deletehabit(id: number) {
             setHabits((prev: Habit[]) => prev.filter(habit => habit.id !== id))
         }
         function togglehabit(id: number, date: Date) {
             setHabits((curr: Habit[]) => curr.map(h=> {
               if(h.id !==id) return h;
       
               const alreadyDone = h.completions.some(d => isSameDay(d, date));
               const completions = alreadyDone ? h.completions.filter(d => !isSameDay(d, date)) : [...h.completions, date];
               return { ...h, completions };
             }))
         }
         return (
           <HabitContext value={{ habits, addhabit, deletehabit, togglehabit }}>
             {children}
           </HabitContext>
         )
    
}

export function useHabits(){
  const habitContext = useContext(HabitContext);
  if(habitContext==null) throw new Error("Null Context")
  return habitContext;
  }

export default HabitProviders;