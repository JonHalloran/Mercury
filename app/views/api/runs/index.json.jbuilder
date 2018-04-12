@runs.each do |run|
  json.runs do
    json.set! run.id do
      json.partial! 'api/runs/run', run: run
    end
  end
end
