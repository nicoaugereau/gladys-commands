# gladys-commands

This module add the possibility to Gladys to execute commands, like Restart, Reboot, Shutdown.<br>
The module can restart Gladys, Gladys Bluetooth and Gladys Voice modules

Prerequisites
-------------

- [Gladys](http://gladysassistant.com) ( tested with v3.7.3 )

 
Getting Started
---------------
#### Gladys parameters

The following parameters are automatically added in gladys. You can change them if necessary.
After install and reboot, click "Train the brain" on Brain page.

Examples for Raspberry PI :
```
SHUTDOWN_CMD=sudo shutdown -h now
REBOOT_CMD=sudo reboot
RESTART_CMD=sudo pm2 restart gladys
RESTART_VOICE_CMD=sudo pm2 restart gladys-voice
RESTART_BT_CMD=sudo pm2 restart gladys-bluetooth
```


#### Sentences added in the brain :
French sentences :<br>
Eteins-toi<br>
Redémarre<br>
Relance-toi<br>
Redémarre Bluetooth<br>
Redémarre le module Bluetooth<br>
Redémarre Voice<br>
Redémarre le module Voice<br>

English sentences :<br>
Shutdown<br>
Reboot<br>
Restart<br>
Restart Bluetooth<br>
Restart Bluetooth module<br>
Restart Voice<br>
Restart Voice module<br>

####

What is Gladys project
-------------

**Website :** [https://gladysassistant.com](http://gladysassistant.com) <br>
**Community :** [https://community.gladysassistant.com/](https://community.gladysassistant.com/)

