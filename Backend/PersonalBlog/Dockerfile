FROM python:3.11-slim

WORKDIR /usr/src/PersonalBlog

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat-openbsd

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/PersonalBlog/entrypoint.sh
RUN chmod +x /usr/src/PersonalBlog/entrypoint.sh

COPY . .

ENTRYPOINT [ "/usr/src/PersonalBlog/entrypoint.sh" ]

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]