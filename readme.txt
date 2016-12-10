sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
psql -f db.sql -U postgres