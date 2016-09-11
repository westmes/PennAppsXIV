@ECHO OFF

curl -v -X PUT "https://api.projectoxford.ai/face/v1.0/facelists/missperson"
-H "Content-Type: application/json"
-H "Ocp-Apim-Subscription-Key: {fdcaf7d5d4dc4041b66c2fd12e01be78}"