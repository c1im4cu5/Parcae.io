# Use a lightweight Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /

# Copy the entire application code
COPY . .

# Install dependencies and run scripts
RUN npm install && \
    node googleCompile && \
    node companyGeneration && \
    npm run build

# Expose the port Next.js will run on
EXPOSE 8080

# Start the Next.js production server
CMD ["npm", "run", "start"]
