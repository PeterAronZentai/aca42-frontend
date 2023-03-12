# az acr build --registry $ACR_NAME --image fe:1 .
# az containerapp create \
#   --name fe \
#   --resource-group $RESOURCE_GROUP \
#   --environment $ENVIRONMENT \
#   --image $ACR_NAME.azurecr.io/fe:1 \
#   --target-port 3000 \
#   --ingress 'external' \
#   --registry-server $ACR_NAME.azurecr.io \
#   --query properties.configuration.ingress.fqdn