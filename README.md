# gladys-commands
=======================

This module add the possibility to Gladys to execute commands, like Restart, Reboot, Shutdown.
The module can restart Gladys, Gladys Bluetooth and Gladys Voice modules

Prerequisites
-------------

- [Gladys](http://gladysproject.com) ( tested with v3.7.3 )

 
Getting Started
---------------
#### Gladys parameters

Add followings parameters in gladys :

For my raspberry I use following parameters but you can change them :
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
French sentences :
Eteins-toi
Redémarre
Relance-toi
Redémarre Bluetooth
Redémarre le module Bluetooth
Redémarre Voice
Redémarre le module Voice

English sentences :
Shutdown
Reboot
Restart
Restart Bluetooth
Restart Bluetooth module
Restart Voice
Restart Voice module

####

What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)

