#!/bin/sh

if [ -n "$1" ]
then
	appfullname="$1"
else
	echo "no jar specified"
	exit 255
fi
appshortname=${appfullname%-*}

if [ -n "$2" ]
then
	cmd="$2"
else
	echo "no cmd"
	exit 255
fi

pid=$(ps -ef | grep "$appshortname" |grep "java"|awk '{print $2}')
START_CMD="nohup java -jar -Xms256M -Xmx256M $appfullname > /home/shopdemo/$appfullname.log 2>&1 &"
PROJECT=$appshortname

stop()
{
 	if [ "$pid" == "" ];then
            echo "[INFO] Service $PROJECT not exist or stop success"
        else
            echo "[INFO] Service $PROJECT pid is $pid"
            echo "[INFO] Killing $PROJECT ......"
            kill $pid
            sleep 5
            pid=`ps -ef | grep "$appshortname" |grep "java"|awk '{print $2}'`
            if [ "$pid" == "" ]; then
                echo "[INFO] Stop service $PROJECT success"
            else
                echo "[WARN] Stop service $PROJECT failed"
                echo "[INFO] Start force killing ......"
                kill -9 $pid
            fi
        fi
}


start()
{
    	echo "[INFO] Start command: $START_CMD"
    	eval $START_CMD
    	sleep 3
        pid=`ps -ef | grep "$appshortname" |grep "java"|awk '{print $2}'`
        if [ "$pid" == "" ]; then
            echo "[ERROR] $PROJECT start failed"
            exit 1
        else
            echo "[INFO] $PROJECT start success, Pid:$pid"
        fi
}


case "$cmd" in
	stop)
		stop
		;;
	start)
		start
		;;
	restart)
		stop
		sleep 1
		start
		;;
	*)
		echo "cmd args error"
		exit 252
		;;
esac 