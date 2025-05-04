# Step 1: Use Node.js 18 as the base image
FROM node:18

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy dependency files first
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the backend source code
COPY . .

# Step 6: Expose the port your backend runs on
EXPOSE 5000

# Step 7: Start the server
CMD ["npm", "start"]
