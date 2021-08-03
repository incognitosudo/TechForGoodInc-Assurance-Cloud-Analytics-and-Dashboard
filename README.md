<h1 align = "center"> Cloud Analytics and Dashboard </h1>

<details>
<summary>Automation Walkthrough</summary>

<details>
<summary>MacOS</summary>
    
Open the terminal and run `pip install pyinstaller`. This will install PyInstaller
Inside the terminal, go to the directory where your script is located (use `cd` to navigate in the directories)
Once you‘re in the path where your script is located, write the following `pyinstaller --onefile update_data.py` in the terminal to make the script executable.
If you see `UPX is not available` then run this command `brew install UPX`. Make sure you hvae your `HomeBrew` intalled.
Then to schedule jobs on macOS, we’re going to use crontab. To do so, open the terminal and run `crontab -e`. 
Use this link to get crontab reference: https://crontab.guru
    
    0 0 * * * command_to_execute
    
reference/what each astrik means:
    
    * - minute (0-59)
    * - hour (0-23)
    * - day of the month (1-31)
    * - month (1-12)
    * - dayo of the week (0-6, Sunday to Saturday)

After typing out, press esc . Then type `:` and write `wq`to save and exit (`w` - write, `q` - quit) and finally, press enter.
    
    0 0 * * * command_to_execute
    ~
    ~
    ~
    ~
    ~
    ~
    ~
    :wq

If system asks to grant access to Terminal, click "ok".
    
To verify the crontab was created, write `crontab -e` or `crontab -l`. In case you want to remove all crontabs listed, write crontab `-r`.

</details>
    
<details>
<summary>Windows</summary>
    
A Batch file is used for different purposes, but in this case, we’ll use it as an executable file to automate our Python scripts.
We will store our Python script in a bat file, then click on the bat file to execute the command and run the Python script. To do so, follow these steps.
Right-click inside any folder and click “new” and create a notepad (“text document”)
Inside the notepad, write a text using the following format.
    
`<Paste your python.exe location> <Paste your python script location>`
To get the “python.exe” path (Python application path) you need to go to where Python is saved (check where you installed it). Your notepad might look like the text below.
    
`"C:\User\Anaconda\python.exe" "C:\Scripts\example.py"`
    
Now click “File” and then “Save as …” and write any name including the extension `.bat` in the end. For this example, I’ll create a file named `update_data.bat`
    
Press the Windows button and search for Windows Task Scheduler. Then click on it.
Now you should see a window that looks like the picture above. Click “Create Basic Task” on the right panel.
A window like "Create Basic Task Wizard" will pop up
Now you only have to fill in all the information needed and click next. These are the options you see above:
Create a Basic Task: Write your task name and description.
Trigger time: Choose when you want the task to start. You can choose daily, weekly, monthly, and more. Then you have to pick the time for the previous selection (recur every x days, weeks, months)
Action: There are 3 actions available but 2 of them are deprecated, so just choose “Start a program” and click next. Then, browse the bat file we created earlier.
Click the “Finish” button to create the task.
After this, a new task should be listed on the Task Scheduler.
</details>
</details>

<details>
    
<summary>`data collector.ipynb` purpose</summary>
    
    It's a Jupyter Notebook primary data collection module demo. The actual data collection module is in `db management` package with the name of `collector_module.py`.
    </details>
