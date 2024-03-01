# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8000

ENV NAME SrivaniTrust

# Run app.py when the container launches
CMD ["uvicorn", "main:app", "--reload","--host=0.0.0.0","--port=8000"]
