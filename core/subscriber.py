from paho.mqtt import client as mqtt
import ssl
import time

path_to_root_cert = ""
device_id = "/subscriptions/ba11518a-becb-443e-87a6-9ec33c631b52/resourceGroups/Assurance-2021/providers/Microsoft.Devices/IotHubs/MessagingHubAssurance"
sas_token = ""
iot_hub_name = "MessagingHubAssurance"

def on_connect(client, user_data, flags, rc):
    print("Devcice connect with result code: "+str(rc));

def on_disconnect(client, user_data, rc):
    print("Devcice connect with result code: "+str(rc));

# def on_publish(client, user_data, mid):
#     print("Device sent message")
def on_message(client, userdata, message):
    print("Received message: ", str(message.payload.decode("utf-8")))

# mqttBroker = "MessagingHubAssurance.azure-devices.net"
# client = mqtt.Client("Smartphone")
# client.connect(mqttBroker, port=8883)

# client.loop_start()
# client.subscribe("TEMPERATURE")
# client.on_message = on_message
# time.sleep(30)
# client.loop_end()

client = mqtt.Client(client_id=device_id, protocol=mqtt.MQTTv311)

client.on_connect = on_connect
client.on_disconnect = on_disconnect
#client.on_publish = on_publish

client.username_pw_set(username=iot_hub_name+".azure-devices.net/" +
                       device_id + "/?api-version=2018-06-30", password=None)

cert_file = ""
key_file = ""
#client.tls_set(ca_certs=path_to_root_cert, certfile=cert_file, keyfile=key_file,cert_reqs=ssl.CERT_REQUIRED, tls_version=ssl.PROTOCOL_TLSv1_2, ciphers=None)

client.connect(iot_hub_name+".azure-devices.net", port=8883)
client.loop_start()
client.subscribe("devices")
client.on_message = on_message
time.sleep(30)
client.loop_end()