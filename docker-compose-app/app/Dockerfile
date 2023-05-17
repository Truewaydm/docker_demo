FROM python:3.10

LABEL authors="dev"

WORKDIR /app

RUN pip install pymongo

COPY . .

CMD ["python", "main.py"]
