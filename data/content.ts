export type BlockType = 'text' | 'code' | 'note';

export interface Block {
  type: BlockType;
  value: string;
  kind?: 'error' | 'info' | 'info-square' | 'success' | 'warning' | 'warning-alt';
  message?: string;
}

export interface Subtopic {
  title: string;
  blocks: Block[];
}

export interface Section {
  id: string;
  title: string;
  intro: string;
  subtopics: Subtopic[];
}

const sections: Section[] = [
  {
    id: 'introduction',
    title: 'Introduction to Linux Migration Compass',
    intro:'The Linux Migration Compass is a comprehensive documentation guide designed to help users new to Linux transition seamlessly to the Pop!_OS Linux distribution. Pop!_OS by system76 is a Linux distribution known for its polished interface, performance optimizations, automatic handling of hybrid graphics. The guide will cover everything from installation to advanced usage, ensuring that you have all the information you need to make the switch successfully.',
    subtopics: [
      {
        title: 'What is Pop!_OS?',
        blocks: [
          { type: 'text', value: 'Pop!_OS by system76 is a Linux distribution known for its polished interface, performance optimizations, automatic handling of hybrid graphics. It is designed for developers, engineers, and computer scientists. It features a custom GNOME desktop environment and a focus on productivity. Thus making it one of the best operating systems that suits a majority of users.' },
        ]
      },
    ]
  },
  {
    id: 'imageflashing',
    title: 'Creating a Bootable Live Disk',
    intro: 'The following guide describes how to download the Pop!_OS.iso image, write it to a flash drive, and boot into the OS Installation setup.',
    subtopics: [
        {
          title: 'Prepare Your System',
          blocks: [
            {
              type: 'text',
              value: 'Before starting, ensure you have the following:<br>-An x86 Computer with at least 4gb RAM and 20gb free storage <br>-A USB drive with at least 8 GB of storage.<br>- A stable internet connection.<br>- At least 20 GB of free space on your hard drive.<br>- A backup of all important data on your Windows system.'
            },
            {
              type: 'note',
              value: 'Back up your data to an external drive or cloud storage (e.g., Google Drive, OneDrive) before proceeding. Partitioning can lead to data loss if not done correctly.',
              kind: 'warning-alt',
              message: 'Important to Note'
            },
            
          ]
        },
        {
          title: 'Download the Pop!_OS ISO',
          blocks: [
            {
              type: 'text',
              value: 'Visit https://pop.system76.com and download the latest ISO file. Choose the version that matches your hardware (e.g., Intel/AMD or NVIDIA).'
            },
          ]
        },
        {
          title: 'Create a Bootable USB',
          blocks: [
            {
              type: 'text',
              value: 'Use a tool like Rufus https://rufus.ie to create a bootable USB drive:'
            },
            {
              type: 'text',
              value: '<ol>1. Insert your USB drive.<br>2. Open Rufus.<br>3. Select the downloaded Pop!_OS ISO file.<br>4. Choose your USB drive as the target.<br>5. Click "Start" or "Flash" to create the bootable USB.</ol>'
            },

            {
              type: 'note',
              value: 'This process will erase all data on the USB drive. Ensure you’ve backed up any important files from the USB.',
              kind: 'warning-alt',
              message: 'Important to Note'
            },
          ]
        },
        {
          title: 'Boot from the USB',
          blocks: [
            {
              type: 'text',
              value: 'Insert your USB drive into your computer.'
            },
            {
              type: 'text',
              value: '<ol>1. Restart your computer.<br>2. Enter the BIOS/UEFI settings by pressing the appropriate key (usually ESC, F2, F12, or DEL, heck your manufacturer’s documentation).<br>3. Set the USB drive as the first boot device in the boot order. (This is a safety step to reboot into the USB without any extra steps if necessary)<br>4. Save changes and reboot.</ol> Alternatively you may be prompted to select a boot device when you attempt to enter BIOS settings.   <br>Your computer should boot from the USB drive, and you’ll see the Pop!_OS installation screen.'
            },
            {
              type: 'note',
              value: 'Ensure Secure Boot is disabled in your BIOS settings to install Pop!_OS. BIOS settings vary by manufacturer, so refer to your computer’s documentation for instructions.',
              kind: 'warning',
              message: 'Important Step'
            },

          ]
        },
      ]
  },
  {
    id: 'installation',
    title: 'Installing Pop!_OS',
    intro: 'This section will guide you through the installation process of Pop!_OS on your computer once we have booted from our live disk',
    subtopics: [
      {
        title: 'Live Session',
        blocks: [
          { 
            type: 'text', 
            value: 'Once you boot from the USB drive, you will see the Pop!_OS welcome screen. Here you have booted into a Live Session where you can try Pop!_OS without installing it by selecting "Try Demo Mode" or proceed with the installation by selecting "Install Pop!_OS". You can explore and use the OS without any risk to your current system. I recommend you familiarize yourself with the OS before proceeding with the installation.'
          },
        ]
      },
      {
        title: 'Installation',
        blocks: [
          { 
            type: 'text', 
            value: 'Once you are ready to install, select "Install Pop!_OS"'
          },
          { 
            type: 'text', 
            value: '<ol>1. Select your language<br> 2. Select your locale<br>3. Choose your keyboard layout<br>4. Select either from the installation type: "Clean Install" or "Custom (Advanced)"'
          },
          {
            type: 'note',
            value: 'If you have just one disk and would like to dual-boot, choose "Custom (Advanced)", select the partition where you want to install Pop!_OS. You can create, delete, or resize partitions as needed, you will need to reboot into the live session if you have made any new partitions as target. For a clean install, select "Clean Install" and follow the prompts to erase the choice of disk and install Pop!_OS.',
            kind: 'info',
            message: 'At this step you can decide to dual-boot between Windows and Linux or install Pop!_OS as the only OS'
          },
          {
            type: 'note',
            value: 'This step is destructive and will erase the chosen partition/disk chosen, make sure you have selected the intended target space to avoid loosing any existing data or your Windows. If you are dual-booting, ensure you have enough space on your hard drive for Pop!_OS.',
            kind: 'warning-alt',
            message: 'Warning'
          },
          { 
            type: 'text', 
            value: '<ol>5. Click "Erase and Install" after you have chosen your installation type</ol>'
          },
        ]
      },
      {
        title: 'User Account Setup',
        blocks: [
          { 
            type: 'text', 
            value: 'After the installation type, you will be prompted to create a user account. Enter your name and user name, then you will be prompted to set a password. This will be your primary account on Pop!_OS.'
          },
          { 
            type: 'note',
            value: 'This password will be used to log in to your account as well as for performing high privilege tasks throughout the OS.',
            kind: 'info-square',
            message: 'Important to Note'
          }

        ]
      },
      {
        title: 'Full Disk Encryption (Optional)',
        blocks: [
          { 
            type: 'text', 
            value: 'You will be prompted to enable full disk encryption. This is optional but recommended for security. If you choose to enable it, you will need to enter a password each time you boot your computer. You can choose to set the password to be the same as your user account password or a different one. This is a security feature that encrypts your entire disk, preventing unauthorized access. If you choose not to enable it, you can skip this step.'
          },
        ]
      },
      {
        title: 'Completing the Installation',
        blocks: [
          { 
            type: 'text', 
            value: 'Once the installation is complete, you will be prompted to restart your computer. Remove the USB drive when prompted during the restart process. Your computer will boot into Pop!_OS, and you will be greeted with the login screen. Enter your user account credentials to log in.'
          },
          { 
            type: 'text', 
            value: 'Congratulations!, You have successfully installed Pop!_OS on your computer.'
          },
        ]
      },

    ]
  },
  {
    id: 'welcometopop',
    title: 'Welcome to Pop!_OS',
    intro: 'Welcome to Pop!_OS! This section will guide you through the initial setup, configuration and familiarization of your new operating system.',
    subtopics: [
      {
        title: 'Keeping your system up to date',
        blocks: [
          { 
            type: 'text', 
            value: 'The most frequent task you will perform on your system is keeping it up to date. Pop!_OS is based on Ubuntu, which means it uses the APT package manager to manage software updates. It is recommended to update your computer on a daily basis to ensure the latest software and security updates are installed.<br><br> Later in this documentation we will learn how to add additional sources and package managers. You can update your system using the terminal or the Pop!_Shop, Pop\'s own GUI for installing and updating softwares and applications.'
          },
          { 
            type: 'text', 
            value: 'Click on the top right corner of your screen to open the system tray. Click on Wi-Fi, and connect to your Wi-Fi network.'
          },
          { 
            type: 'text', 
            value: 'Open your terminal and run the following commands.'
          },
          { 
            type: 'code', 
            value: 'sudo apt update\nsudo apt upgrade'
          },
          { 
            type: 'text', 
            value: 'You will observe a list of packages that are available for update. You will be prompted to enter your password. Enter your password and press Enter. The system will then download and install the updates. Ideally reboot your system after the updates are installed to ensure all changes take effect.'
          },
          { 
            type: 'note',
            value: 'commands starting with sudo are run with superuser privileges and will require authentication with every use. This means you have elevated permissions to perform administrative tasks. Be cautious when using sudo, as it can modify system files and settings.',
            kind: 'warning',
            message: 'Important to Note'
          },

        ]
      },
      {
        title: 'Familiarizing with the OS',
        blocks: [
          {
            type: 'text',
            value: 'Once you have installed Pop!_OS, take some time to familiarize yourself with the OS. The Pop!_OS desktop environment is based on GNOME, which provides a clean and modern interface.'
          },
          {
            type: 'text',
            value: 'The top bar contains the system tray, clock, and notifications.'
          },
          {
            type: 'text',
            value: 'On the left side, you can access all of your installed apps through the "Applications" button.'
          },
          {
            type: 'text',
            value: 'In the middle, your date and time reveals your notification tray and a calendar.'
          },
          {
            type: 'text',
            value: 'On the right side, your system tray will house your screen brightness, volume, Wi-Fi and Bluetooth, Lock and Power Options, and importantly, if you have a secondary NVIDIA GPU, Pop allows you to choose between certain modes depending on your need. We will study these options later in this documentation.'
          },
          {
            type: 'text',
            value: 'The Activities Overview can be accessed by pressing the Super key (Windows key) or clicking the Activities button in the top left corner. This allows you to see all open windows and applications.'
          },
          {
            type: 'text',
            value: 'The dock on the bottom of the screen contains your favorite applications. You can add or remove applications from the dock by right-clicking on them.'
          },
          {
            type: 'text',
            value: 'You can also access the Settings menu by clicking on the system tray and selecting "Settings". This is where you can configure your system settings, including display, sound, network, and user accounts.'
          },
          {
            type: 'text',
            value: 'Largly you\'ll notice the desktop and navigation experience is very intuitive even if very new to you, apps like LibreOffice and the Files serve as a very user-friendly alternative to your services and files from Windows.'
          },

        ],
      },
      {
        title: 'Installing Additional Software',
        blocks: [
          {
            type: 'text',
            value: 'Pop!_OS comes with a variety of pre-installed applications, but you may want to install additional software. You can do this using the Pop!_Shop or the terminal. The Pop!_Shop is the software center where you can find and install applications. It is similar to the Microsoft Store or Apple App Store.'
          },
          {
            type: 'text',
            value: 'To install software using the terminal, use the following command'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install <package-name>'
          },
          {
            type: 'text',
            value: 'Or to install multiple packages at once, use the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install <package-name> <package-name> ...'
          },

          {
            type: 'text',
            value: 'Replace <package-name> with the name of the software you want to install. For example, to install VLC media player, use the command:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install vlc'
          },
          { 
            type: 'note',
            value: 'we run "sudo apt update" to ensure we have the latest package lists before installing any software.',
            kind: 'info-square',
            message: 'Important to Note'
          },
          {
            type: 'text',
            value: 'You can also search for software in the Pop!_Shop by typing the name of the software in the search bar.'
          },
          {
            type: 'text',
            value: 'There are a variety of software distributions available for Pop!_OS. A well known one being Flatpak. Flatpak is a software utility for software virtualization and deployment. It allows you to install and run a wide variety of applications in a sandboxed environment, which means they are isolated from the rest of your system. This can help improve security and stability. To install Flatpak, use the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install flatpak'
          },
          {
            type: 'text',
            value: 'One of the most common ways to install softwares is through the terminal. The commands vary depending on your choice of softwares or package managers (Follow instructions from the respective software provider). For example, to install Chrome'
          },
          {
            type: 'code',
            value: 'deb http://dl.google.com/linux/chrome/deb/ stable main'
          },
          {
            type: 'text',
            value: 'Here we added google\'s repository to our sources list.'
          },
          {
            type: 'code',
            value: 'wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -'
          },
          {
            type: 'text',
            value: 'Here we validated the repository by adding google\'s signing key to our apt keyring.'
          },
          {
            type: 'text',
            value: 'And finally, we can install Chrome by running the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install google-chrome-stable'
          },

        ]
        
      },
      {
        title: 'GNOME Online Accounts',
        blocks: [
          { 
            type: 'text', 
            value: '@ Online Accounts, under the settings app allows you to connect your other accounts like Google or Microsoft to your Linux system allowing several apps to easily integrate your online accounts for services such as emails, calendars, cloud storage, messaging and etc.' 
          },
        ]
      }

    ]
    
  },
  {
    id: 'advance',
    title: 'Advanced Customization and Tuning',
    intro:'In this section, we will explore advanced customization options and performance tuning for Pop!_OS. This includes configuring the desktop environment, optimizing system performance, and customizing the user interface to suit your preferences.',
    subtopics: [
      {
        title: 'Facial Biometric Authentication',
        blocks: [
          { 
            type: 'text', 
            value: 'Setting up a facial biometric authentication is a great way to enhance the security and convenience of using your system. It replaces the need to manually enter your password for elevated privileges or logging in. If your device has a Webcam or an IR camera. You can easily set up your facial biometric authentication using Howdy' 
          },
          {
            type: 'code',
            value: '# Adding Howdy\'s repository to our sources\nsudo add-apt-repository -y ppa:boltgolt/howdy'
          },
          { 
            type: 'text', 
            value: 'Now we can install Howdy by running the following command:'
          },
          {
            type: 'text',
            value: 'You will be prompted to choose between different options for howdy. f, b, s for Fast, Balanced or Secure. You may choose that best fit your needs.'
          },

          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install howdy ffmpeg'
          },
          { 
            type: 'note',
            value: 'We are installing ffmpeg for troubleshooting purposes, testing out our available cameras and their respective video formats.',
            kind: 'info-square',
            message: 'Information'
          },

          { 
            type: 'text', 
            value: 'Before we can add our face to Howdy, we need to set up howdy to identify and correctly use our webcam. Run the following command to see a list of your camera sensors'
          },
          {
            type: 'code',
            value: 'ls /dev | grep "video."'
          },

          { 
            type: 'text', 
            value: 'Replace <videoX> with the name of your camera sensor. For example, if your camera sensor is /dev/video0, run the following command:'
          },
          {
            type: 'code',
            value: 'ffplay /dev/<videoX>'
          },
          { 
            type: 'text', 
            value: 'Test out each of the video sources and see which one outputs the actual camera feed. Take note of it.'
          },

          { 
            type: 'note',
            value: 'If you are using an IR sensor, there is a known bug which prevents Howdy from using it. See the solution below to resolve at this current time.',
            kind: 'info',
            message: 'Important Step'
          },

          { 
            type: 'text', 
            value: 'Howdy outputs an unsupported image format error for most IR camera sensors, this is due to an issue with newer numpy packages not resolving well with the current Howdy version. To resolve this, we need to downgrade numpy to a compatible version. The issue is brought up here: https://stackoverflow.com/a/78638053'
          },
          {
            type: 'code',
            value: 'sudo pip install --upgrade numpy==1.26.4'
          },
          { 
            type: 'text', 
            value: 'Once you have identified the correct camera sensor, you can add your face to Howdy by opening the Howdy configuration file. Run the following command:'
          },
          {
            type: 'code',
            value: 'sudo howdy config'
          },
          {
            type: 'text',
            value: 'In the configuration file, find the line'
          },
          {
            type: 'code',
            value: 'device_path = /dev/v4l/by-path/none'
          },
          {
            type: 'text',
            value: 'Replace the path with the correct camera we identified earlier /dev/<videoX>'
          },
          {
            type: 'code',
            value: 'device_path = /dev/<videoX>'
          },
          {
            type: 'text',
            value: 'Click CTRL-X and then Y to save and exit the configuration file. And now we are ready to add our face to Howdy.'
          },
          {
            type: 'code',
            value: 'sudo howdy add'
          },

        ]
      },
      {
        title: 'Fingerprint Biometric Authentication',
        blocks: [
          { 
            type: 'text', 
            value: 'If your device has a fingerprint reader, you can set up fingerprint authentication using Fprint. Fprint is a D-Bus service to access fingerprint readers. It is supported by most modern fingerprint readers.' 
          },
          { 
            type: 'note',
            value: 'Most HP laptops and other brands unfortunately may not support fingerprint readers on linux. To check if you have a supported fingerprint reader, run the following commands:',
            kind: 'info',
            message: 'Important Step'
          },

          {
            type: 'code',
            value: 'lsusb'
          },
          {
            type: 'text',
            value: 'Try to rule out devices that mention anything other than fingerprint, and look for "Goodix", "ElanTech", "Synaptics" or "Validity". Example:'
          },
          {
            type: 'code',
            value: 'Bus 001 Device 003: ID 138a:00ab Validity Sensors, Inc.'
          },
          {
            type: 'text',
            value: 'Visit https://fprint.freedesktop.org/supported-devices.html and try finding your fingerprint\'s name and ID in this case name is "Validity Sensors" and the ID is "138a:00ab".<br><br> If you are not able to find yours in the list, your fingerprint reader is likely not supported.'
          },

          {
            type: 'text',
            value: 'If you are able to find your fingerprint reader in the list, you can set it up by installing Fprint:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install fprintd libpam-fprintd'
          },
          {
            type: 'text',
            value: 'Next, we need to enroll our fingerprint. after running this command, place your finger on the fingerprint reader when prompted.'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install fprintd libpam-fprintd'
          },
          {
            type: 'text',
            value: 'Now we add update the system to use our fingerprint reader for authentication. This can now be used to unlock your screen, authenticate sudo commands, and log in to your system.'
          },
          {
            type: 'code',
            value: 'sudo pam-auth-update'
          },
        ]
      },
      {
        title: 'Desktop Environment Customization',
        blocks: [
          { 
            type: 'text', 
            value: 'Pop!_OS uses GNOME as its desktop environment, which is highly customizable. You can change the appearance of your desktop, including themes, icons, and fonts. To customize your desktop environment, you can use GNOME Tweaks. Install it using the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install gnome-tweaks'
          },
          { 
            type: 'text', 
            value: 'Once installed, you can open GNOME Tweaks from the applications menu. Here you can change the appearance of your desktop, including themes, icons, and fonts to your liking. You can also enable or disable extensions, which are small add-ons that enhance the functionality of GNOME. Many of these add-ons are available on the GNOME Extensions website: https://extensions.gnome.org as well as Pop!_OS\'s own Pop!_Shop.'
          },
          {
            type: 'text',
            value: 'Under settings and GNOME Tweaks, you can also change the behavior of your desktop environment, including window management, workspaces, keyboard shortcuts, and touchpad and gesture settings to your liking'
          },
        ]
        
      },
      {
        title: 'Display Server Protocol',
        blocks: [
          {
            type: 'text',
            value: 'a Display Server Protocol is a communication protocol between the display server and the applications. It is responsible for rendering graphics on the screen and handling input events from the keyboard and mouse. Pop!_OS uses X11 as its default display server protocol, which is an older protocol that has been around for decades. However, it is still widely used and supported by most applications.'
          },

          {
            type: 'text',
            value: 'If you are using a laptop with a trackpad and want to take advantage of the latest features, you can switch to Wayland, which is a newer display server protocol that is designed to be faster, efficient and secure. This will also enable most advanced gestures and in-app gestures that X11 does not support on its own. To switch to Wayland run the following commands:'
          },
          { 
            type: 'note',
            value: 'If you have an older PC with NVIDIA graphics or an older laptop, wayland not perform well on your device, and you may want to stick with X11. You can always switch back to X11 if you experience any issues with Wayland.',
            kind: 'warning',
            message: 'Important to Note'
          },
          {
            type: 'code',
            value: 'sudo nano /etc/gdm3/custom.conf'
          },
          {
            type: 'text',
            value: 'This will open your GNOME Display Manager configuration file. Find the line that says #WaylandEnable=false and uncomment it by removing the # at the beginning of the line. And write true. Save and exit the file.'
          },
          {
            type: 'text',
            value: 'Now log out of your current session with CTRL + ALT + DEL or through the system tray.'
          },
          { 
            type: 'note',
            value: 'Ensure you have saved any work as this will log you out and close all of your applications',
            kind: 'warning',
            message: 'Important to Note'
          },
          {
            type: 'text',
            value: 'On your login page, a gear icon should appear on the bottom right corner, click it, and select Wayland. This setting will persist and all of your sessions will use Wayland from now on.'
          },
          { 
            type: 'note',
            value: 'Wayland has known issues specifically with a discrete NVIDIA GPU, in the next section we will cover any issues you may encounter and how to resolve them.',
            kind: 'warning',
            message: 'Important to Note'
          },

        ]
      },
    ]

  },
  {
    id: 'sysmgmtips',
    title: 'System Management and Troubleshooting',
    intro:'In this section, we will cover system management tips and troubleshooting techniques for Pop!_OS. This includes managing system resources, monitoring performance, and troubleshooting common issues.',
    subtopics: [
      {
        title: 'NVIDIA Drivers and Management',
        blocks: [
          { 
            type: 'text', 
            value: 'If your system has discrete NVIDIA graphics, depending on the chosen installation in the beginning, Pop!_OS will work out of the box saving a ton of hassle for you. Pop!_OS has excellent hybrid GPU support, allowing you customize and choose what either of your GPUs (Integrated or NVIDIA) do.<br><br>To check if your NVIDIA drivers are installed, run the following command:' 
          },
          {
            type: 'code',
            value: 'nvidia-smi'
          },
          {
            type: 'text',
            value: 'You can always run the following command to download or update your NVIDIA drivers if necessary.'
          },          
          {
            type: 'code',
            value: 'sudo apt-get install system76-driver-nvidia'
          },
          {
            type: 'text',
            value: 'To download a specific version of NVIDIA drivers, you can use the following command and replace xxx with the desired release version:'
          },
          {
            type: 'code',
            value: 'sudo apt-get install nvidia-driver-xxx'
          },
        ]
      },

      {
        title: 'Black Screen on Suspend',
        blocks: [
          {
            type: 'text',
            value: 'Most systems with hybrid GPUs may experience a black screen once waking up from suspend. This is a well known and notorious issue mainly caused by NVIDIA drivers. There are no permanents fixes to date, however they are some workarounds you can try:'
          },
          {
            type: 'text',
            value: '<ol>1. Downgrading your NVIDIA drivers to version 550, or 470.<br></ol>'
          },
          {
            type: 'code',
            value: 'sudo apt-get install nvidia-driver-550 # or 470'
          },
          {
            type: 'text',
            value: '<ol>2. Making sure your display refresh rate in settings matches the specification of your laptop or PC\'s refresh rate. Wayland can provide you more refresh rates than what your monitor is desgined for as factory spec.<br></ol>'
          },
          {
            type: 'text',
            value: '<ol>3. If none of these solutions work, then turn off your NVIDIA GPU under your BIOS settings and enable only when needed and avoid suspending your laptop.</ol>'
          },

        ]
      },
      {
        title: 'System Resource Management',
        blocks: [
          {
            type: 'text',
            value: 'Pop!_OS provides several tools for managing system resources and monitoring performance.'
          },
          {
            type: 'text',
            value: 'In applications, you can find the System Monitor application, which provides a graphical interface for monitoring system resources such as CPU, memory, and disk usage. You can also use the terminal to monitor system resources using commands like:'
          },
          {
            type: 'code',
            value: 'top'
          },
          {
            type: 'text',
            value: 'There are many other system monitoring apps you can download that provide more advanced features such as temperature and frequency readings in a highly customisable terminal window. Some popular ones include:'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install htop lm-sensors'
          },
          {
            type: 'text',
            value: 'htop requires lm-sensors to get sensor readings'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install btop'
          }
        ]
      },
      {
        title: 'Hardware Acceleration',
        blocks: [
          {
            type: 'text',
            value: 'Pop!_OS supports hardware acceleration for certain applications, such as web browsers and video players. Hardware acceleration allows these applications to use the GPU for rendering graphics, which can improve performance and reduce CPU usage. Hence significantly saving battery life on laptops.'
          },
          {
            type: 'text',
            value: 'To enable hardware acceleration in chromium browsers, you can go to Settings > Advanced > System and enable the option for "Use hardware acceleration when available".'
          },
          {
            type: 'text',
            value: 'To enable hardware acceleraton in Gecko based browsers (Firefox and etc), you can go to Settings > General > Performance and enable the option for "Use recommended performance settings". Usually this may not work for Firefox, and you may need to enable it manually by going to about:config and setting the following options:'
          },
          {
            type: 'code',
            value: 'layers.acceleration.force-enabled = true'
          },
          {
            type: 'text',
            value: 'and'
          },
          {
            type: 'code',
            value: 'gfx.webrender.all = true'
          },
        ]
      },
      {
        title: 'Battery Management',
        blocks: [
          {
            type: 'text',
            value: 'Pop!_OS is one of the best modern and highly efficient linux distribution out there. It has excellent battery management systems ensuring high power delivery when needed and high efficiency optimizations when needed, and provides several tools for managing battery life and optimizing power consumption. It will most certainly breathe new life to your laptop\'s on battery performance compared to Windows. You can use the Power settings in the Settings menu to adjust power-saving options, such as screen brightness, sleep settings, and battery usage.'
          },
          { 
            type: 'note',
            value: 'System76 recommends not installing any additional battery saving tools or applications, as Pop!_OS already has built-in power management features that are optimized for the hardware. Installing additional tools may cause conflicts and reduce battery life.',
            kind: 'warning',
            message: 'Important to Note'
          },
          {
            type: 'text',
            value: 'To monitor battery usage and performance, you can install powertop, an excellent monitoring tool that provides in-depth breakdowns of power consumption throughout the system\'s softwares and hardwares:'
          },
          {
            type: 'code',
            value: 'sudo apt install powertop'
          },
        ]
      },

      {
        title: 'Terminal Commands Basics',
        blocks: [
          { 
            type: 'text', 
            value: 'The terminal is a powerful tool in Pop!_OS that allows you to interact with the system using commands. It is a great way to perform tasks quickly and efficiently. In Linux you may find yourself using the terminal more often than you would in Windows. The terminal is a command-line interface that allows you to interact with the operating system using text commands. It is a powerful tool that can be used to perform a wide variety of tasks, including file management, system administration, and software installation. To open the terminal, press Super + T or search for "Terminal" in the applications menu.'
          },
          {
            type: 'text',
            value: 'To navigate the file system, use the following commands:'
          },
          {
            type: 'code',
            value: 'cd <directory> # Change directory'
          },
          {
            type: 'code',
            value: 'cd ~ # Change to home directory'
          },
          {
            type: 'code',
            value: 'ls # List files in the current directory'
          },

          {
            type: 'code',
            value: 'pwd # Print current directory path'
          },
          {
            type: 'text',
            value: 'To create, delete, and manage files and directories, use the following commands:'

          },
          {
            type: 'code',
            value: 'mkdir <directory> # Create a new directory'
          },
          {
            type: 'code',
            value: 'rm <file> # Remove a file'
          },
          {
            type: 'code',
            value: 'rmdir <directory> # Remove a directory'
          },
          {
            type: 'code',
            value: 'cp <source> <destination> # Copy a file or directory'
          },
          {
            type: 'code',
            value: 'mv <source> <destination> # Move or rename a file or directory'
          },
          {
            type: 'code',
            value: 'touch <file> # Create a new empty file'
          },
          {
            type: 'code',
            value: 'cat <file> # Display the contents of a file'
          },
          {
            type: 'code',
            value: 'nano <file> # Edit a file using nano text editor'
          },
          {
            type: 'text',
            value: 'To search for files and directories, use the following commands:'
          },
          {
            type: 'code',
            value: 'find <directory> -name <file> # Search for a file in a directory'
          },
          {
            type: 'code',
            value: 'grep <pattern> <file> # Search for a pattern in a file'
          },
          {
            type: 'text',
            value: 'To manage system processes, use the following commands:'
          },
          {
            type: 'code',
            value: 'ps # List running processes'
          },
          {
            type: 'code',
            value: 'kill <pid> # Kill a process by its PID'
          },
          {
            type: 'code',
            value: 'pkill <process_name> # Kill a process by its name'
          },
          { 
            type: 'note',
            value: 'Sometimes you may get an error saying permission denied, for such errors they require elevated privileges. Prefix your commands with sudo in this case. For example, to remove a file with elevated privileges, run the following command:',
            kind: 'info-square',
            message: 'Important to Note'
          },
          {
            type: 'code',
            value: 'sudo rm <file>'
          }
        ]
      },
    ]
  },
  {
    id: 'apps',
    title: 'Applications and Alternatives',
    intro: `Linux has a large community of amazing developers creating and managing powerful, open-sourced applications. In this section, we will cover some of the most popular applications and alternatives available for Pop!_OS. This includes productivity tools, media players, and development tools.`,
    subtopics: [
      {
        title: 'Photo Editing Softwares',
        blocks: [
          {
            type: 'text',
            value: 'One of the most well known photo editing software is GIMP, renowned for its powerful and advanced tools. You can learn more about them at https://www.gimp.org/'
          },
          {
            type: 'code',
            value: 'sudo apt install gimp'
          },
          {
            type: 'text',
            value: 'A simpler alternative to GIMP is Pinta, a simplier but capable photo editing software. Learn more about them at https://www.pinta-project.com/. Add the repository:'
          },
          {
            type: 'code',
            value: 'sudo add-apt-repository ppa:pinta-maintainers/pinta-stable'
          },
          {
            type: 'text',
            value: 'Download Pinta'
          },
          {
            type: 'code',
            value: 'sudo apt update\nsudo apt install pinta'
          }

        ]
      },
      {
        title: 'Video Editing Softwares',
        blocks: [
          {
            type: 'text',
            value: 'Most commonly known video editing software on linux is Davinci Resolve, the full software is paid with extra features, however a free tier is available too. To download and set up Davinci Resolve, follow the steps:'
          },
          {
            type: 'text',
            value: '<ol>1. Download from https://www.blackmagicdesign.com<br>/products/davinciresolve <br>2. Click on the zip file "DaVinci_Resolve_XX.Y.Z_Linux.zip" and extract it.<br>3. Click "DaVinci_Resolve_XX.Y.Z_Linux.run" to run the set up.<br>4. Follow instructions as prompted.</ol>'
          },
          {
            type: 'text',
            value: 'DaVinci Resolve\'s free version does not support mp4, and neither the free or paid version support AAC, to work around this issue we will use FFmpeg as we downloaded this earlier in this guide. FFmpeg is a very powerful tool also used for coverting video file formats.'
          },
          {
            type: 'code',
            value: 'ffmpeg -i input.mp4 -c:v prores_ks -profile:v 3 -qscale:v 9 -acodec pcm_s16le output.mov'
          },
          {
            type: 'text',
            value: 'For audio files, you can use the following command to convert mp3 to wav:'
          },
          {
            type: 'code',
            value: 'ffmpeg -i input.mp3 -c:a pcm_s16le output.wav'
          },
          {
            type: 'text',
            value: 'Another powerful video editing tool is Kdenlive, which is a free and open-source video editing software. It is a great alternative to Davinci Resolve and is available for Linux. Kdenlive can be downloaded from their site at https://kdenlive.org/en/download/. To install via terminal, add the repository:'
          },
          {
            type: 'code',
            value: 'sudo add-apt-repository ppa:kdenlive/kdenlive-stable'
          },
          {
            type: 'text',
            value: 'And finally download Kdenlive:'
          },
          {
            type: 'code',
            value: 'sudo apt-get update\nsudo apt-get install kdenlive'
          },

        ]
      },
      {
        title: 'Media Players',
        blocks: [
          {
            type: 'text',
            value: 'One of the most popular video players on Linux is VLC Media Player. It is a free and open-source media player that supports a wide range of audio and video formats. To install VLC, run the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt install vlc'
          },
          {
            type: 'text',
            value: 'Another popular media player is MPV, which is a free and open-source media player that is known for its simplicity and performance. Install via terminal using the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt install mpv'
          },
        ]
      },
      {
        title: 'Machine/Deep Learning Tools',
        blocks: [
          {
            type: 'text',
            value: 'System76 has packed up all things machine learning and deep learning into a single package called Tensorman. It is a collection of tools and libraries for machine learning and deep learning. It includes popular libraries such as TensorFlow, PyTorch, and Keras, making ML/DL extremely easy to set up and use. To install Tensorman, run the following command:'
          },
          {
            type: 'code',
            value: 'sudo apt install tensorman\nsudo apt install nvidia-docker2 # For NVIDIA CUDA Support'
          },
        ]
      },
    ]
  },
  {
    id: 'conclusion',
    title: 'Your Linux Journey',
    intro: 'Congratulations! You have successfully installed and configured Pop!_OS on your system. You are now ready to explore the world of Linux and take advantage of its powerful features and capabilities. Remember that Linux is a community-driven operating system, and there are many resources available to help you along the way. Whether you are a beginner or an experienced user, there is always something new to learn and discover in the world of Linux.',
    subtopics: [
      {
        title: 'Future of Pop!_OS',
        blocks: [
          {
            type: 'text',
            value: 'System76 are pioneers when it comes to making a very powerful yet efficient modern linux operating systems. Pop!_OS is soon set to see a major update, bringing in CosmicDE, a new desktop environment that is completely written in Rust, and is expected to very strongly compete with two existing mainstream desktop environments; GNOME and KDE. Expecting unparalleled power efficiency as well as a highly snappy and fast OS feel, and keeping up to date the most modern GNOME and KDE customization techniques and tweaks.'
          },
        ]
      },
      {
        title: 'Resources and Support',
        blocks: [
          {
            type: 'text',
            value: 'If you have any questions or need support, you can visit the Pop!_OS community forums at https://pop.system76.com/ or join the Pop!_OS subreddit at https://www.reddit.com/r/pop_os/. You can also find many tutorials and guides on the official Pop!_OS website at https://pop.system76.com/docs/.'
          },
          {
            type: 'text',
            value: 'Your journey with Linux is all about learning what you operate and truly having control over your system. It\'s learning process may seem inundating at first, but it is a rewarding experience. You will find yourself learning new things every day and discovering new tools and applications that can help you be more productive and efficient, and even start to feel more comfortable with using the terminal more frequently. The Linux community is vast and welcoming, and there are many resources available to help you along the way. Regardless of if you are a beginner or an experienced user, there is always something new to learn and discover in the world of Linux.'
          }
        ]
      }

    ]
  },


];

export default { sections };
