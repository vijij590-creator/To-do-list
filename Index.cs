using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> tasks = new List<string>();
        while (true)
        {
            Console.Write("\n1=Add  2=View  3=Exit : ");
            string choice = Console.ReadLine();

            if (choice == "1")
            {
                Console.Write("Enter task: ");
                tasks.Add(Console.ReadLine());
            }
            else if (choice == "2")
            {
                Console.WriteLine("\nTasks:");
                for (int i = 0; i < tasks.Count; i++)
                    Console.WriteLine($"{i + 1}. {tasks[i]}");
            }
            else if (choice == "3")
                break;
        }
    }
}
