FROM node:22.1.0

# Set the working directory
WORKDIR /app

# Install serve globally
RUN npm install -g serve && \
    npm install -g react-scripts

ARG CACHEBUST
RUN echo $CACHEBUST

# Clone the repository and build the app
RUN git clone https://github.com/sri-karthick-k/db-infra-active-loadbalancer-client.git
WORKDIR /app/db-infra-active-loadbalancer-client
RUN npm install && \
    npm run build

# Expose the port
EXPOSE 3000

# Run the app
CMD ["serve", "-s", "build", "-l", "3001"]
