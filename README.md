# gladys-commands

This module add the possibility to Gladys to execute commands, like Restart, Reboot, Shutdown.<br>
The module can restart Gladys, Gladys Bluetooth and Gladys Voice modules

Prerequisites
-------------

- [Gladys](http://gladysproject.com) ( tested with v3.7.3 )

 
Getting Started
---------------
#### Gladys parameters

Add following parameters in gladys :

Examples for Raspberry PI :
```
SHUTDOWN_CMD=sudo shutdown -h now
```
```
REBOOT_CMD=sudo reboot
```
```
RESTART_CMD=sudo pm2 restart gladys
```
```
RESTART_VOICE_CMD=sudo pm2 restart gladyd-voice
```
```
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

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)

